const  axios = require('axios');

const API_URL = 'http://localhost:5000/api/v1/books';

export const getBooks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error fetching books');
    }
};
