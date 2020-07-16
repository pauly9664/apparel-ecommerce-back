// Set your app credentials
const credentials = {
    apiKey: '50cfc47db6e731f241011b5c9f8e148c51ae20ba438ce7027aae439451c6fbe6',
    username: 'sandbox',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage() {
    const options = {
        // Set the numbers you want to send to in international format
        to: ['+254717444970'],
        // Set your message
        message: "Welcome to Varsity Bit",
        // Set your shortCode or senderId
        from: '6991'
    }
    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
}

sendMessage();

