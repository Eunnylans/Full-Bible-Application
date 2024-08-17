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


export const getBooks = async () => {
    try {
        const response = await axios.get(`${API_URL}/books`);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};


export const getChapter = async (book, chapter) => {
    try {
        const response = await axios.get(`${API_URL}/${book}/${chapter}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching chapter:', error);
        throw error;
    }
};


export const getVerseByVersion = async (verse, version) => {
    try {
        const response = await axios.get(`${API_URL}/${verse}?translation=${version}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching verse:', error);
        throw error;
    }
};

