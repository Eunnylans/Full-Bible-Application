import React, { useEffect, useState } from 'react';
import { getVerse, getVerseByVersion } from '../API/Api';
import  VerseDisplay from '../VerseDisplay/VerseDisplay';

function DailyVerse({ version }) {
    const [verse, setVerse] = useState(null);

    useEffect(() => {
        const fetchDailyVerse = async () => {
            const randomVerse = 'John 3:16'; // Example; you could randomize
            const data = await getVerseByVersion(randomVerse, version);
            setVerse(data);
        };

        fetchDailyVerse();
        const intervalId = setInterval(fetchDailyVerse, 86400000); // 24 hours in milliseconds

        return () => clearInterval(intervalId); // Clear interval on unmount
    }, [version]);

    return verse ? <VerseDisplay verseData={verse} /> : null;
}

export default DailyVerse;
