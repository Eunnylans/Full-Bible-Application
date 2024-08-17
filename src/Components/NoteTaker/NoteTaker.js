import React, { useState } from 'react';

const NoteTaker = ({ verseReference, onSaveNote }) => {
    const [note, setNote] = useState('');

    const handleSave = () => {
        onSaveNote(verseReference, note);
        setNote('');
    };

    return (
        <div>
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write your note here..."
            />
            <button onClick={handleSave}>Save Note</button>
        </div>
    );
};

export default NoteTaker;
