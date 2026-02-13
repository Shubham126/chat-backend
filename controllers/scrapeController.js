const scrapingService = require('../services/scrapingService');
const openaiService = require('../services/openaiService');
const mongoStorageService = require('../services/mongoStorageService');
const contextBuilder = require('../services/contextBuilder');

class ScrapeController {
    // Helper method to extract user ID from both authentication methods
    getUserId(req) {
        if (req.apiUser && req.apiUser._id) {
            return req.apiUser._id;
        }
        if (req.user && req.user._id) {
            return req.user._id;
        }
        return null;
    }

    async scrapeAndSave(req, res, next) {
        try {
            const { url } = req.body;

            if (!url) {
                return res.status(400).json({
                    success: false,
                    message: 'URL is required'
                });
            }

            // Extract user ID from either authentication method
            const userId = this.getUserId(req);
            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: 'User authentication required'
                });
            }

            // Scrape the website
            const scrapedData = await scrapingService.scrapeWebsite(url);

            // Save to MongoDB using the new mongo storage service
            const fileResult = await mongoStorageService.saveScrapedData(scrapedData, userId);

            res.json({
                success: true,
                message: `Website scraped and saved as "${fileResult.fileName}"`,
                data: {
                    fileId: fileResult.fileId,
                    fileName: fileResult.fileName,
                    displayName: scrapedData.title || fileResult.fileName,
                    scrapedData: {
                        title: scrapedData.title,
                        url: scrapedData.url,
                        timestamp: scrapedData.timestamp,
                        headingsCount: scrapedData.headings.length,
                        paragraphsCount: scrapedData.paragraphs.length,
                        linksCount: scrapedData.links.length
                    }
                }
            });

        } catch (error) {
            next(error);
        }
    }

    async scrapeUrl(req, res, next) {
        try {
            const { url, question } = req.body;

            if (!url || !question) {
                return res.status(400).json({
                    success: false,
                    message: 'URL and question are required'
                });
            }

            // Scrape the website
            const scrapedData = await scrapingService.scrapeWebsite(url);

            // Build context from scraped data
            const context = contextBuilder.buildContext(scrapedData, question);

            // Get AI response
            const aiResponse = await geminiService.getResponse(context, question);

            // Note: Session storage removed as it's not needed for current functionality
            // All scraped data is now stored via mongoStorageService.saveScrapedData()

            res.json({
                success: true,
                data: {
                    response: aiResponse
                }
            });

        } catch (error) {
            next(error);
        }
    }

    async getHistory(req, res, next) {
        try {
            // Extract user ID from either authentication method
            const userId = this.getUserId(req);
            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: 'User authentication required'
                });
            }

            const files = await mongoStorageService.getFilesList(userId);
            res.json({
                success: true,
                data: files
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteHistory(req, res, next) {
        try {
            const { id } = req.params;

            // Extract user ID from either authentication method
            const userId = this.getUserId(req);
            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: 'User authentication required'
                });
            }

            await mongoStorageService.deleteFile(id, userId);
            res.json({
                success: true,
                message: 'File deleted successfully'
            });
        } catch (error) {
            next(error);
        }
    }

    async getFileContent(req, res, next) {
        try {
            const { id } = req.params;

            // Extract user ID from either authentication method
            const userId = this.getUserId(req);
            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: 'User authentication required'
                });
            }

            const fileContent = await mongoStorageService.getFileContent(id, userId);
            res.json({
                success: true,
                data: fileContent
            });
        } catch (error) {
            next(error);
        }
    }

    async renameFile(req, res, next) {
        try {
            const { id } = req.params;
            const { customName } = req.body;

            if (!customName || !customName.trim()) {
                return res.status(400).json({
                    success: false,
                    message: 'Custom name is required'
                });
            }

            // Extract user ID from either authentication method
            const userId = this.getUserId(req);
            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: 'User authentication required'
                });
            }

            await mongoStorageService.renameFile(id, customName.trim(), userId);
            res.json({
                success: true,
                message: 'File renamed successfully'
            });
        } catch (error) {
            next(error);
        }
    }

    async getStorageStats(req, res, next) {
        try {
            // Extract user ID from either authentication method
            const userId = this.getUserId(req);
            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: 'User authentication required'
                });
            }

            const stats = await mongoStorageService.getStorageStats(userId);
            res.json({
                success: true,
                data: stats
            });
        } catch (error) {
            next(error);
        }
    }

    async chatWithWebsite(req, res, next) {
        try {
            console.log('\n' + '='.repeat(70));
            console.log('💬 CHAT WITH WEBSITE REQUEST');
            console.log('='.repeat(70));

            const { fileId, message } = req.body;
            console.log('📥 Request body:', { fileId: fileId || 'not provided', message: message?.substring(0, 50) + '...' });
            console.log('🔑 Auth method:', req.isWebsiteKey ? 'Website-specific API key' : 'User API key');

            // Validate message
            if (!message || !message.trim()) {
                console.log('❌ Validation failed: Message is required');
                return res.status(400).json({
                    success: false,
                    message: 'Message is required'
                });
            }

            // Determine fileId based on authentication method
            let actualFileId;

            if (req.isWebsiteKey) {
                // NEW SYSTEM: Website-specific API key
                // fileId is already set by apiKeyAuth middleware
                actualFileId = req.currentFileId;
                console.log(`🎯 Using website from API key: ${req.website.title}`);
                console.log(`📄 File ID: ${actualFileId}`);
            } else {
                // OLD SYSTEM: User API key (backward compatibility)
                // fileId must be provided in request body
                if (!fileId) {
                    console.log('❌ No fileId provided for user API key');
                    return res.status(400).json({
                        success: false,
                        message: 'No website selected. Please configure your integration settings in the dashboard and select a website to chat with.',
                        errorCode: 'NO_WEBSITE_SELECTED',
                        helpUrl: 'https://chatflow-ai.com/docs/integration-setup'
                    });
                }
                actualFileId = fileId;
                console.log(`⚠️  Using fileId from request (legacy): ${fileId}`);
            }

            // Extract user ID from either authentication method
            const userId = this.getUserId(req);
            console.log(`👤 User ID: ${userId}`);

            if (!userId) {
                console.log('❌ No user ID found in request');
                return res.status(401).json({
                    success: false,
                    message: 'User authentication required'
                });
            }

            // Get the file content (filter by user)
            console.log(`📂 Fetching file content for ID: ${actualFileId}, User: ${userId}`);
            const fileContent = await mongoStorageService.getFileContent(actualFileId, userId);

            if (!fileContent) {
                console.log('❌ File not found or access denied');
                return res.status(404).json({
                    success: false,
                    message: 'Website not found or access denied. The selected website may have been deleted or you may not have permission to access it.',
                    errorCode: 'WEBSITE_NOT_FOUND'
                });
            }

            console.log(`✅ File content retrieved: ${fileContent.scrapedData?.title || 'Untitled'}`);
            console.log(`📊 Content stats: ${fileContent.scrapedData?.paragraphs?.length || 0} paragraphs, ${fileContent.scrapedData?.headings?.length || 0} headings`);

            // Build context from scraped data for Gemini AI
            console.log('🔨 Building context for AI...');
            const context = contextBuilder.buildContext(fileContent.scrapedData, message);
            console.log(`✅ Context built: ${context.substring(0, 100)}...`);

            // Get AI response using OpenRouter (same as dashboard)
            console.log('🤖 Requesting AI response...');
            const aiResponse = await openaiService.getResponse(context, message);
            console.log(`✅ AI response received: ${aiResponse.substring(0, 100)}...`);

            console.log('✅ Chat request completed successfully');
            console.log('='.repeat(70) + '\n');

            res.json({
                success: true,
                data: {
                    response: aiResponse,
                    websiteTitle: fileContent.scrapedData.title,
                    websiteUrl: fileContent.scrapedData.url
                }
            });

        } catch (error) {
            console.log('\n' + '❌'.repeat(35));
            console.error('💥 CHAT ERROR:', error.message);
            console.error('📍 Error stack:', error.stack);
            console.log('❌'.repeat(35) + '\n');
            next(error);
        }
    }


    async getThemeData(req, res, next) {
        try {
            const { id } = req.params;
            const userId = this.getUserId(req);

            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: 'User authentication required'
                });
            }

            // Find the scraped data by ID and user
            const scrapedData = await mongoStorageService.getScrapedDataById(id, userId);

            if (!scrapedData) {
                return res.status(404).json({
                    success: false,
                    message: 'Website data not found'
                });
            }

            // Extract theme data
            const themeData = {
                extracted: scrapedData.theme?.extracted || false,
                colors: scrapedData.theme?.colors || null,
                typography: scrapedData.theme?.typography || null,
                layout: scrapedData.theme?.layout || null,
                branding: scrapedData.theme?.branding || null,
                websiteName: scrapedData.title || 'Unknown Website',
                websiteUrl: scrapedData.url || '',
                timestamp: scrapedData.theme?.timestamp || scrapedData.scrapedAt
            };

            // If no theme was extracted, provide default fallback
            if (!themeData.extracted || !themeData.colors) {
                themeData.colors = {
                    primary: '#007bff',
                    secondary: '#6c757d',
                    accent: '#007bff',
                    background: '#ffffff',
                    text: '#333333',
                    border: '#dee2e6',
                    button: '#007bff',
                    link: '#007bff'
                };
                themeData.fallback = true;
            }

            res.json({
                success: true,
                data: themeData,
                message: themeData.extracted ? 'Theme data retrieved successfully' : 'Using fallback theme data'
            });

        } catch (error) {
            console.error('Error in getThemeData:', error);
            next(error);
        }
    }

    async regenerateWebsiteApiKey(req, res, next) {
        try {
            const { id } = req.params; // website fileId
            const userId = this.getUserId(req);

            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: 'User authentication required'
                });
            }

            // Find the website by fileId and user
            const ScrapedData = require('../models/ScrapedData');
            const website = await ScrapedData.findOne({ fileId: id, userId });

            if (!website) {
                return res.status(404).json({
                    success: false,
                    message: 'Website not found or access denied'
                });
            }

            // Store old key for logging
            const oldKey = website.websiteApiKey;

            // Generate new API key
            website.websiteApiKey = ScrapedData.generateWebsiteApiKey();
            await website.save();

            console.log(`🔄 API key regenerated for: ${website.title}`);
            console.log(`   Old key: ${oldKey?.substring(0, 20)}...`);
            console.log(`   New key: ${website.websiteApiKey.substring(0, 20)}...`);

            res.json({
                success: true,
                data: {
                    websiteApiKey: website.websiteApiKey,
                    websiteTitle: website.title
                },
                message: 'API key regenerated successfully. Update your website integration with the new key.'
            });

        } catch (error) {
            console.error('Error regenerating API key:', error);
            next(error);
        }
    }

    async getSdkConfig(req, res, next) {
        try {
            // Extract user ID from API key authentication
            const userId = this.getUserId(req);
            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: 'User authentication required'
                });
            }

            // Get user settings
            const UserSettings = require('../models/UserSettings');
            const userSettings = await UserSettings.getOrCreateSettings(userId);

            // Get user's available websites
            const websites = await mongoStorageService.getFilesList(userId);

            // Build SDK configuration
            const sdkConfig = {
                user: {
                    id: userId,
                    hasWebsites: websites.length > 0
                },
                integration: {
                    selectedWebsiteId: userSettings.integrationSettings.selectedWebsiteId,
                    selectedWebsiteUrl: userSettings.integrationSettings.selectedWebsiteUrl,
                    themeChoice: userSettings.integrationSettings.themeChoice,
                    customizations: userSettings.integrationSettings.customizations
                },
                availableWebsites: websites,
                selectedWebsite: null
            };

            // If user has a selected website, get its details
            if (userSettings.integrationSettings.selectedWebsiteId) {
                const selectedWebsite = websites.find(site =>
                    site.id === userSettings.integrationSettings.selectedWebsiteId
                );
                if (selectedWebsite) {
                    sdkConfig.selectedWebsite = selectedWebsite;

                    // If theme choice is website, get theme data
                    if (userSettings.integrationSettings.themeChoice === 'website') {
                        try {
                            const themeData = await mongoStorageService.getScrapedDataById(selectedWebsite.id, userId);
                            if (themeData && themeData.theme) {
                                sdkConfig.themeData = themeData.theme;
                            }
                        } catch (error) {
                            console.warn('Could not load theme data:', error);
                        }
                    }
                }
            }

            res.json({
                success: true,
                data: sdkConfig
            });

        } catch (error) {
            console.error('Error getting SDK config:', error);
            next(error);
        }
    }

    async saveIntegrationSettings(req, res, next) {
        try {
            const userId = this.getUserId(req);
            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: 'User authentication required'
                });
            }

            const { selectedWebsiteId, selectedWebsiteUrl, themeChoice, customizations } = req.body;

            // Validate required fields
            if (!selectedWebsiteId) {
                return res.status(400).json({
                    success: false,
                    message: 'Selected website ID is required'
                });
            }

            if (!themeChoice || !['default', 'website'].includes(themeChoice)) {
                return res.status(400).json({
                    success: false,
                    message: 'Valid theme choice is required (default or website)'
                });
            }

            // Update user settings
            const UserSettings = require('../models/UserSettings');
            const settingsUpdate = {
                selectedWebsiteId,
                selectedWebsiteUrl,
                themeChoice
            };

            if (customizations) {
                settingsUpdate.customizations = customizations;
            }

            const updatedSettings = await UserSettings.updateIntegrationSettings(userId, settingsUpdate);

            res.json({
                success: true,
                data: updatedSettings.integrationSettings,
                message: 'Integration settings saved successfully'
            });

        } catch (error) {
            console.error('Error saving integration settings:', error);
            next(error);
        }
    }
}

const scrapeControllerInstance = new ScrapeController();

// Bind all methods to maintain 'this' context
const boundController = {
    scrapeAndSave: scrapeControllerInstance.scrapeAndSave.bind(scrapeControllerInstance),
    scrapeUrl: scrapeControllerInstance.scrapeUrl.bind(scrapeControllerInstance),
    getHistory: scrapeControllerInstance.getHistory.bind(scrapeControllerInstance),
    deleteHistory: scrapeControllerInstance.deleteHistory.bind(scrapeControllerInstance),
    getFileContent: scrapeControllerInstance.getFileContent.bind(scrapeControllerInstance),
    renameFile: scrapeControllerInstance.renameFile.bind(scrapeControllerInstance),
    getStorageStats: scrapeControllerInstance.getStorageStats.bind(scrapeControllerInstance),
    chatWithWebsite: scrapeControllerInstance.chatWithWebsite.bind(scrapeControllerInstance),
    getThemeData: scrapeControllerInstance.getThemeData.bind(scrapeControllerInstance),
    getSdkConfig: scrapeControllerInstance.getSdkConfig.bind(scrapeControllerInstance),
    saveIntegrationSettings: scrapeControllerInstance.saveIntegrationSettings.bind(scrapeControllerInstance),
    regenerateWebsiteApiKey: scrapeControllerInstance.regenerateWebsiteApiKey.bind(scrapeControllerInstance)
};

module.exports = boundController;