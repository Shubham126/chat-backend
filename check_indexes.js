require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function checkIndexes() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        const indexes = await User.collection.indexes();
        console.log('\n🔍 Current Indexes on "users" collection:');
        console.log(JSON.stringify(indexes, null, 2));

        const apiKeyIndex = indexes.find(idx => idx.name === 'apiKey_1');
        if (apiKeyIndex) {
            console.log('\n⚠️ apiKey_1 index found!');
            console.log('Sparse property:', apiKeyIndex.sparse);

            if (!apiKeyIndex.sparse) {
                console.log('❌ CRITICAL: Index is NOT sparse. This is the cause of the bug.');
                console.log('Attempting to drop it again...');
                await User.collection.dropIndex('apiKey_1');
                console.log('✅ Index dropped. Please restart your server.');
            } else {
                console.log('✅ Index IS sparse. This should work.');
            }
        } else {
            console.log('\n✅ apiKey_1 index NOT found. Mongoose should create it on startup.');
        }

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
        process.exit();
    }
}

checkIndexes();
