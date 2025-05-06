'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [
      {
        title: 'Frontend Development',
        description: 'Building responsive and accessible user interfaces using React.js, HTML, CSS, JavaScript, and GSAP for animations.',
        bulletPoints: [
          'Design and develop consumer products creatively.',
          'Develop user interfaces with React.',
          'Responsive web page design and development.',
          'Create UX element interactions.',
          'Position company branding effectively.',
          'Create modern 3D experiences.'
        ],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Backend Development',
        description: 'Creating scalable REST APIs and backend logic using Node.js, Express, PostgreSQL, and MongoDB.',
        bulletPoints: [
          'Build secure RESTful APIs.',
          'Implement business logic in Node.js.',
          'Integrate with SQL and NoSQL databases.',
          'Authentication and authorization handling.',
          'Use MVC architecture for clean code.'
        ],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Full-Stack Web Development',
        description: 'Developing complete web applications with both frontend and backend components and deploying them to cloud platforms.',
        bulletPoints: [
          'Integrate frontend with backend APIs.',
          'Deploy applications on Vercel and Render.',
          'State management using React Context.',
          'Full-stack project architecture planning.',
          'End-to-end testing and performance tuning.'
        ],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Database Design & Management',
        description: 'Designing database schemas and managing PostgreSQL and MongoDB using tools like pgAdmin.',
        bulletPoints: [
          'Create normalized relational schemas.',
          'Use Sequelize ORM for migrations.',
          'Handle indexing and query optimization.',
          'Backup and restore strategies.',
          'Monitor DB performance and health.'
        ],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Version Control & Git Workflows',
        description: 'Managing project versions using Git, with branching, pull requests, and CI/CD setup.',
        bulletPoints: [
          'Use GitHub/GitLab for source control.',
          'Create pull requests and manage branches.',
          'Implement CI/CD pipelines with GitHub Actions.',
          'Code reviews and merge conflict resolution.',
          'Maintain clean commit history.'
        ],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
