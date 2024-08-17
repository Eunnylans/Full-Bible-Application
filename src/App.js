import React, { useState } from 'react';
import SearchVerse from './Components/SearchVerse/SearchVerse';
import VerseDisplay from './Components/VerseDisplay/VerseDisplay';
import { getVerse } from './Components/API/Api';
import './App.css';  // Import the CSS file


function App() {
    const [verseData, setVerseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (verse) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getVerse(verse);
            setVerseData(data);
        } catch (error) {
            setError('Failed to fetch the verse. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className="App">
            <h1>Bible Search</h1>
            <SearchVerse onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <VerseDisplay verseData={verseData} />
        </div>
    );
}

export default App;
