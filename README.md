# 💼 Personal Portfolio Website

This is my **personal portfolio website**, designed to showcase my skills, projects, and achievements. The website features dynamic data fetching, light and dark modes, animations, and a responsive design that adapts seamlessly across devices. With both frontend and backend integrations, it offers a personalized experience while demonstrating my capabilities as a developer.

---

## 🚀 Project Overview

**Portfolio Website** serves as an online presence to display my professional work, including project details, services offered, experience, and testimonials. It features dynamic data fetching from the backend and includes light and dark modes, making it an interactive and user-friendly experience.

---

## 🌟 Key Features

### 🌙 Light & Dark Modes
- Toggle between **light** and **dark themes** for a customizable user experience, providing a visually comfortable interface in any environment.

### 🔄 Dynamic Data Fetching
- Fetches **dynamic data** from the backend API built with **Node.js**, **Express**, **Sequelize**, and **PostgreSQL**.
- The **Services**, **Experience**, and **About Us** sections are all fetched dynamically from the backend API.

### 🎨 Animations & Transitions
- Smooth **CSS animations** and **transitions** to enhance the visual appeal and provide an engaging user experience.

### 📱 Responsive Design
- Fully optimized for all screen sizes, ensuring the portfolio looks great on both desktop and mobile devices.

### 📝 Sections Included:
- **Home**: A welcome section introducing who I am.
- **About Us**: A brief overview of my skills, experience, and education, fetched dynamically from the backend.
- **Experience**: Detailing my previous work and achievements, fetched dynamically from the backend.
- **Services Offered**: Showcasing the services I provide as a developer, fetched dynamically from the backend.
- **Recent Work**: Displaying my latest projects and contributions.
- **Testimonials**: Feedback from clients and colleagues.
- **Contact Us**: A section for visitors to contact me.

### 🔧 Backend Integration
- Fetches dynamic data like **projects**, **testimonials**, **services**, **experience**, and **about us** through **RESTful APIs**.
- If the backend isn't accessible, the website gracefully shows **fallback data** from the frontend.

---

## 🛠️ Technologies Used

### Frontend:
- **HTML**, **CSS**, **JavaScript** (ES6+)
- **CSS Animations** & **Transitions** for smooth interactions and visual effects

### Backend:
- **Node.js** & **Express.js** for building the RESTful APIs
- **Sequelize ORM** for database interactions
- **PostgreSQL** for data storage

### Other Features:
- **Light/Dark Mode Toggle** for a flexible UI experience
- **Responsive Design** using **Flexbox** & **Grid Layouts**
- **API Integration** for dynamic content fetching

---

## 👥 My Contribution

As the lead developer of this project, my responsibilities included:

- ✅ Designing and implementing the overall **UI/UX** of the website using **React** and **CSS**.
- ✅ Setting up the **backend API** with **Node.js**, **Express.js**, and **Sequelize** for dynamic data fetching.
- ✅ Implementing the **Light/Dark Mode Toggle** for an interactive and customizable theme.
- ✅ Ensuring **responsive design** for mobile and desktop devices using **Flexbox** and **Grid Layouts**.
- ✅ Managing fallback data from the frontend to ensure the website remains functional if the backend fails.


---

## 📝 How to Use

### Frontend Setup:

1. Clone this repository to your local machine.
2. Navigate to the **docs** directory(frontend directory it is).
3. Open the project in **VS Code** or any other code editor.
4. Run the following command to start the frontend using **Live Server**:
   ```bash
   npm install
   npm start

### Backend Setup:

1. Navigate to the **backend** directory
2. Run the following command to install the required dependencies:
   ```bash
   npm install
3. Set up the PostgreSQL database:
   Create a PostgreSQL database for the project.
   Update the database connection details in the config file (config/config.js).
4. Run the migrations to set up the database schema:
   ```bash
   npx sequelize db:migrate
5. Seed the database with initial data:
   ```bash
   npx sequelize db:seed:all
6. Start the backend server:
   ```bash
   npm start
