import React from 'react';

const VerseDisplay = ({ verseData }) => {
    if (!verseData) return null;

    return (
        <div>
            <h2>{verseData.reference}</h2>
            <p>{verseData.text}</p>
        </div>
    );
};

export default VerseDisplay;
