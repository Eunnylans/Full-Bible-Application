import React, { useState, useEffect } from 'react';
import { getBooks } from '../api';

const BookSelector = ({ onSelectBook }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await getBooks();
            setBooks(data);
        };
        fetchBooks();
    }, []);

    return (
        <select onChange={(e) => onSelectBook(e.target.value)}>
            <option value="">Select a book</option>
            {books.map((book) => (
                <option key={book.name} value={book.name}>
                    {book.name}
                </option>
            ))}
        </select>
    );
};

export default BookSelector;
