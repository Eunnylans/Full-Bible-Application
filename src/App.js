import React, { useState } from 'react';
import SearchVerse from './Components/SearchVerse/SearchVerse';
import VerseDisplay from './Components/VerseDisplay/VerseDisplay';
import BookSelector from './Components/BookSelector/BookSelector';
import ChapterSelector from './Components/ChapterSelector/ChapterSelector';
import VersionSelector from './Components/VersionSelector';
import { getChapter, getVerseByVersion } from './Components/API/Api';
import BookmarkButton from './Components/BookmarkButton/BookmarkButton';
import NoteTaker from './Components/NoteTaker/NoteTaker';
import DailyVerse from './components/DailyVerse';
import './styles.css';

function App() {
    const [verseData, setVerseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedBook, setSelectedBook] = useState('');
    const [selectedChapter, setSelectedChapter] = useState('');
    const [selectedVersion, setSelectedVersion] = useState('KJV');

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


   // Integrate Version Selector in App.js

    const handleVersionSelect = (version) => {
        setSelectedVersion(version);
        setVerseData(null);
    };

    const handleSearch = async (verse) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getVerseByVersion(verse, selectedVersion);
            setVerseData(data);
        } catch (error) {
            setError('Failed to fetch the verse. Please try again.');
        }
        setLoading(false);
    };


// Create Bookmark and Note Management Functions

    const saveBookmark = (verseData) => {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.push(verseData);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    };
    
    const getBookmarks = () => {
        return JSON.parse(localStorage.getItem('bookmarks')) || [];
    };
    
    const saveNote = (verseReference, note) => {
        const notes = JSON.parse(localStorage.getItem('notes')) || {};
        notes[verseReference] = note;
        localStorage.setItem('notes', JSON.stringify(notes));
    };
    
    const getNotes = () => {
        return JSON.parse(localStorage.getItem('notes')) || {};
    };


    

    // Integrate BookmarkButton & NoteTaker in App.js

    const handleBookmark = (verseData) => {
        saveBookmark(verseData);
        alert('Verse bookmarked!');
    };

    const handleSaveNote = (verseReference, note) => {
        saveNote(verseReference, note);
        alert('Note saved!');
    };

    return (
        <div className="App">
            <h1>Bible Search</h1>
            <VersionSelector onSelectVersion={handleVersionSelect} />
            <BookSelector onSelectBook={handleBookSelect} />
            <ChapterSelector book={selectedBook} onSelectChapter={handleChapterSelect} />
            <SearchVerse onSearch={handleSearch} />
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            <VerseDisplay verseData={verseData} />
            {verseData && (
                <>
                    <BookmarkButton verseData={verseData} onBookmark={handleBookmark} />
                    <NoteTaker
                        verseReference={verseData.reference}
                        onSaveNote={handleSaveNote}
                    />
                </>
            )}
            <h2>Daily Verse</h2>
            <DailyVerse version={selectedVersion} />
        </div>
    );
}

export default App;