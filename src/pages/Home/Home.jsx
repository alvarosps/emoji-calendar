import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useSelector } from 'react-redux';
import 'react-calendar/dist/Calendar.css';

const Home = () => {
    const [value, setValue] = useState(new Date());
    const entries = useSelector((state) => state.entries);
    console.log('entries', entries);
    function getEntriesForSelectedDate() {
        return entries.filter((entry) => {
            const entryDate = new Date(entry.date);
            return (
                entryDate.getDate() === value.getDate() &&
                entryDate.getMonth() === value.getMonth() &&
                entryDate.getFullYear() === value.getFullYear()
            );
        });
    }

    return (
        <div>
            <Calendar value={value} onChange={setValue} />
            <div>
                {getEntriesForSelectedDate().map((entry, index) => (
                    <div key={index}>
                        {entry.emojis.map((emoji, emojiIndex) => (
                            <span key={emojiIndex}>{emoji}</span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
