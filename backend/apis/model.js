const { UserProfile, Skill, Project, Contact, Testimonial, Service } = require('../models/index');

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

module.exports = { getUserDetailsModel };
