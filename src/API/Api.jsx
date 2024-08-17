import axios from 'axios';

const API_URL = 'https://bible-api.com/';

export const getVerse = async (verse) => {
    try {
        const response = await axios.get(`${API_URL}${verse}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching verse:', error);
        throw error;
    }
};
