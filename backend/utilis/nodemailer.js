const nodemailer = require('nodemailer');

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use 'gmail' or another SMTP provider
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS,
  },
});

const sendThankYouEmail = async (userEmail, userName) => {
    const mailOptions = {
      from: 'your-email@gmail.com', // Sender address
      to: userEmail, // Receiver address (the user's email)
      subject: 'Thank you for your message', // Email subject
      text: `Dear ${userName},\n\nThank you for your message! We have received it and will get back to you soon.\n\nBest regards,\nYour Company Name`, // Email body text
    };
  
    try {
      await transporter.sendMail(mailOptions); // Send the email
      console.log('Thank You email sent to user');
    } catch (error) {
      console.error('Error sending thank you email:', error);
    }
  };

  const sendOwnerNotificationEmail = async (message) => {
    const mailOptions = {
      from: 'your-email@gmail.com', // Sender address
      to: 'owner-email@example.com', // Receiver address (owner/admin's email)
      subject: 'New Enquiry Received', // Email subject
      text: `You have received a new message from a user:\n\n
      Name: ${message.name}\n
      Email: ${message.email}\n
      Message: ${message.message}\n
      User ID: ${message.user_id}`, // Message details
    };
  
    try {
      await transporter.sendMail(mailOptions); // Send the email
      console.log('Owner notification email sent');
    } catch (error) {
      console.error('Error sending owner notification email:', error);
    }
  };
  
  
module.exports={
    transporter,
    sendThankYouEmail,
    sendOwnerNotificationEmail
}
