const { postMessageModel } = require('./model');
const { sendThankYouEmail, sendOwnerNotificationEmail } = require('../utilis/nodemailer');

const postMessageService = async (data) => {
  try {
    // Save message in DB
    const savedMessage = await postMessageModel(data);

    // Send thank-you email to user
    await sendThankYouEmail(data.email, data.name);

    // Send notification to owner
    await sendOwnerNotificationEmail(data);

    return savedMessage;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  postMessageService,
};
