// js/contact-form.js
import { sendMessage } from '../../services/api.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const messageData = {
            name,
            email,
            message,
            user_id: 1,
        };

        // Disable the button while the request is in progress
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            const response = await sendMessage(messageData);
            alert(response.message || 'Message sent successfully!');
            form.reset();
        } catch (error) {
            console.error('Failed to send message:', error);
            alert('Failed to send your message. Please try again later.');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
});
