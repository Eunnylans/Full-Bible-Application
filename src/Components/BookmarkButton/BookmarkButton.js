import React from 'react';

const BookmarkButton = ({ verseData, onBookmark }) => {
    return (
        <button onClick={() => onBookmark(verseData)}>
            Bookmark
        </button>
    );
};

export default BookmarkButton;
