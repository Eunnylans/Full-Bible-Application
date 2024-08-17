import axios from 'axios';

const API_URL = 'https://bible-api.com/';

// Fetch a specific verse (with optional version/translation)
export const getVerse = async (verse, version = 'kjv') => { // Default to KJV if no version is provided
    try {
        const url = `${API_URL}${verse}?translation=${version}`;
        const response = await axios.get(url);
        console.log('Fetched verse:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching verse:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Fetch a list of books (manually defined if not available via API)
export const getBooks = async () => {
    try {
        // Example response if the API does not support /books
        const books = [
            'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', // etc.
        ];
        console.log('Books:', books);
        return books;

        // If the API had a /books endpoint:
        // const response = await axios.get(`${API_URL}/books`);
        // return response.data;
    } catch (error) {
        console.error('Error fetching books:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Fetch a specific chapter of a book
export const getChapter = async (book, chapter, version = 'kjv') => {
    try {
        const url = `${API_URL}${book}+${chapter}?translation=${version}`;
        const response = await axios.get(url);
        console.log('Fetched chapter:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching chapter:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Fetch a specific verse with a specific version/translation
export const getVerseByVersion = async (verse, version) => {
    try {
        const url = `${API_URL}${verse}?translation=${version}`;
        const response = await axios.get(url);
        console.log('Fetched verse by version:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching verse by version:', error.response ? error.response.data : error.message);
        throw error;
    }
};
