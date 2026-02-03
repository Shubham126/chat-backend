require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const ScrapedData = require('./models/ScrapedData');

async function checkApiKeyAndFiles() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Find user with this API key
        const apiKey = 'ck_7f604cde6bfe2fb8a2387ace186ad28fcfc5a57eda727a53cde6ecb442271f34';
        const user = await User.findOne({ apiKey });

        if (!user) {
            console.log('❌ No user found with this API key');
            console.log('   API Key:', apiKey);
            return;
        }

        console.log('✅ User found:');
        console.log('   Name:', user.name);
        console.log('   Email:', user.email);
        console.log('   User ID:', user._id);

        // Find all scraped files for this user
        const scrapedFiles = await ScrapedData.find({ userId: user._id });

        console.log('\n📁 Scraped files for this user:', scrapedFiles.length);

        if (scrapedFiles.length === 0) {
            console.log('   ⚠️  No scraped files found!');
            console.log('   This is why the chatbot shows "File not found"');
        } else {
            scrapedFiles.forEach((file, index) => {
                console.log(`\n   File ${index + 1}:`);
                console.log('   - ID:', file._id);
                console.log('   - URL:', file.url);
                console.log('   - File Name:', file.fileName);
                console.log('   - Created:', file.createdAt);
            });
        }

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await mongoose.disconnect();
        console.log('\n✅ Disconnected from MongoDB');
    }
}

checkApiKeyAndFiles();
