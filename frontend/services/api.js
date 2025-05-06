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
    return axiosInstance.get('get-user-profile/1')  // Using the correct endpoint for fetching the profile data
        .then(response => response.data)  // Return the data from the API response
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;  // Re-throw the error to handle it in the calling function
        });
};
