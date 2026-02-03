const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configure the email transport using your favorite service (e.g., Gmail, SendGrid, etc.)
// For simplicity, we'll demonstrate using a mock/example SMTP config.
// TIP: Use environment variables for sensitive info in a real deployment!
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'support@omniroute.eu',
        pass: 'YOUR_APP_SPECIFIC_PASSWORD' // Replace with your app-specific password
    }
});

exports.sendWaitlistNotification = functions.firestore
    .document('waitlist/{docId}')
    .onCreate(async (snap, context) => {
        const newValue = snap.data();
        const email = newValue.email;
        const plan = newValue.plan || "general";

        const mailOptions = {
            from: 'OmniRoute <support@omniroute.eu>',
            to: 'support@omniroute.eu',
            subject: 'New Waitlist Signup: ' + email,
            html: `
                <h3>New Signup Alert!</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Plan:</strong> ${plan}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            `
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Notification email sent for: ' + email);
        } catch (error) {
            console.error('Error sending notification email:', error);
        }
    });
