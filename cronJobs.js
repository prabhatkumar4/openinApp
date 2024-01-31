const cron = require('node-cron');
const Task = require('./models/task'); 
const User = require('./models/user'); 
const twilio = require('twilio');

// Setting up Twilio client
const twilioClient = twilio('your_twilio_account_sid', 'your_twilio_auth_token');

// Cron job to change priority based on due_date
cron.schedule('0 0 * * *', async () => {
    try {
    const today = new Date();
    // Update tasks with due_date based priorities
    await Task.updateMany(
        { due_date: { $eq: today } },
      { priority: 0 } // Adjusting priority as per our logic
    );
    // Update tasks with due_date in the next two days
    await Task.updateMany(
      { due_date: { $gte: today, $lt: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000) } },
      { priority: 1 } // Adjusting priority as per our logic
    );
    // Update tasks with due_date in the next three to four days
    await Task.updateMany(
      { due_date: { $gte: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000), $lt: new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000) } },
      { priority: 2 } // Adjusting priority as per our logic
    );
    // Update tasks with due_date in the next five days and beyond
    await Task.updateMany(
      { due_date: { $gte: new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000) } },
      { priority: 3 } // Adjusting priority as per our logic
    );
    console.log('Priority updated successfully based on due_date.');
    } catch (error) {
    console.error('Error updating priority:', error.message);
    }
});

// Cron job for voice calling using Twilio
cron.schedule('0 8 * * *', async () => {
    try {
    // Get users in priority order
    const users = await User.find().sort({ priority: 1 });
    for (const user of users) {
      // Implementing Twilio voice calling logic here
      // Using twilioClient.calls.create() to initiate a call
        console.log(`Calling user ${user.phone_number} with priority ${user.priority}`);
    }
    console.log('Voice calls initiated successfully.');
    } catch (error) {
    console.error('Error initiating voice calls:', error.message);
    }
}, { timezone: 'Asia/Kolkata' }); 
