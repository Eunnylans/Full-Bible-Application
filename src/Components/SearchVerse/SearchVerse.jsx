import React, { useState } from "react";

const SearchVerse = ({ onSearch }) => {
  const [verse, setVerse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verse) {
      onSearch(verse);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={verse}
        onChange={(e) => setVerse(e.target.value)}
        placeholder="Enter verse (e.g., John 3:16)"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchVerse;
