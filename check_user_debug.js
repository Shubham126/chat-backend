require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const fs = require('fs');

async function checkUser() {
    const results = {
        uri: process.env.MONGODB_URI ? process.env.MONGODB_URI.substring(0, 20) + '...' : 'UNDEFINED',
        checks: []
    };

    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const searchEmails = ["Subham123@admin.com", "subham123@admin.com"]; 

        for (const email of searchEmails) {
            const user = await User.findOne({ email });
            results.checks.push({
                search: email,
                found: !!user,
                storedEmail: user ? user.email : null
            });
        }

        const users = await User.find().sort({ createdAt: -1 }).limit(5);
        results.recentUsers = users.map(u => ({ email: u.email, name: u.name }));

    } catch (error) {
        results.error = error.message;
    } finally {
        await mongoose.disconnect();
        fs.writeFileSync('debug_results.json', JSON.stringify(results, null, 2));
        process.exit();
    }
}

checkUser();
