const { UserProfile, Skill, Project, Contact, Testimonial, Service, Message } = require('../models/index');

const getUserDetailsModel = async (userId) => {
  return await UserProfile.findByPk(userId, {
    include: [
      { model: Skill, as: 'skills' },
      { model: Project, as: 'projects' },
      { model: Service, as: 'services' },
      { model: Testimonial, as: 'testimonials' },
      { model: Contact, as: 'contacts' },
    ]
  });
};

const postMessageModel = async (data) => {
  try {
    const { name, email, message, user_id } = data;
    const newMessage = await Message.create({
      name,
      email,
      message,
      user_id,
    });
    return newMessage;
  } catch (error) {
    throw new Error('Failed to save message to the database');
  }
};

module.exports = { getUserDetailsModel,postMessageModel };
