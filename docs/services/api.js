// services/api.js

// Axios configuration
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/',  
    headers: {
      'Content-Type': 'application/json',
    },
});

// Method to get profile data
export const getProfileData = () => {
    return axiosInstance.get('get-user-profile/1') 
        .then(response => response.data)  
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error; 
        });
};

// Method to post a message
export const sendMessage = (messageData) => {
    return axiosInstance.post('post-message', messageData)
        .then(response => response.data)
        .catch(error => {
            console.error('Error sending message:', error);
            throw error;
        });
};
