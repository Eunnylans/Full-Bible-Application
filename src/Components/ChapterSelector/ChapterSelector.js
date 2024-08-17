import React, { useState } from 'react';

const ChapterSelector = ({ book, onSelectChapter }) => {
    const [chapters] = useState([...Array(150).keys()].map((i) => i + 1)); // Assuming up to 150 chapters

    return (
        <select onChange={(e) => onSelectChapter(e.target.value)} disabled={!book}>
            <option value="">Select a chapter</option>
            {chapters.map((chapter) => (
                <option key={chapter} value={chapter}>
                    {chapter}
                </option>
            ))}
        </select>
    );
};

export default ChapterSelector;
