import React, { useState } from 'react';
import SearchVerse from './Components/SearchVerse/SearchVerse';
import VerseDisplay from './Components/VerseDisplay/VerseDisplay';
import BookSelector from './Components/BookSelector/BookSelector';
import ChapterSelector from './Components/ChapterSelector/ChapterSelector';
import { getChapter } from './api';
import './styles.css';

function App() {
    const [verseData, setVerseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedBook, setSelectedBook] = useState('');
    const [selectedChapter, setSelectedChapter] = useState('');

    const handleBookSelect = (book) => {
        setSelectedBook(book);
        setSelectedChapter('');
        setVerseData(null);
    };

    const handleChapterSelect = async (chapter) => {
        setSelectedChapter(chapter);
        setLoading(true);
        setError(null);
        try {
            const data = await getChapter(selectedBook, chapter);
            setVerseData(data);
        } catch (error) {
            setError('Failed to fetch the chapter. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className="App">
            <h1>Bible Search</h1>
            <BookSelector onSelectBook={handleBookSelect} />
            <ChapterSelector book={selectedBook} onSelectChapter={handleChapterSelect} />
            <SearchVerse onSearch={handleChapterSelect} />
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            <VerseDisplay verseData={verseData} />
        </div>
    );
}

export default App;
