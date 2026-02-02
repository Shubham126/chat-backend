require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function fixIndexes() {
    try {
        console.log('🔌 Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected');

        console.log('🔍 Checking indexes...');
        const indexes = await User.collection.getIndexes();
        console.log('Current indexes:', JSON.stringify(indexes, null, 2));

        if (indexes.apiKey_1) {
            console.log('⚠️ Found existing apiKey index. Dropping it...');
            await User.collection.dropIndex('apiKey_1');
            console.log('✅ Index dropped successfully!');
            console.log('ℹ️  The correct index (sparse: true) will be recreated automatically when you restart the server.');
        } else {
            console.log('ℹ️  apiKey_1 index not found. Nothing to drop.');
        }

    } catch (error) {
        console.error('❌ Error:', error);
    } finally {
        await mongoose.disconnect();
        process.exit();
    }
}

fixIndexes();
