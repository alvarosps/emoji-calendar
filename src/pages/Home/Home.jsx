import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

const Home = () => {
    const [value, setValue] = useState(new Date());
    const entries = useSelector((state) => state.entries);

    const navigate = useNavigate();

    const getEntriesForSelectedDate = () => {
        return entries.filter((entry) => {
            const entryDate = new Date(entry.date);
            return (
                entryDate.getDate() === value.getDate() &&
                entryDate.getMonth() === value.getMonth() &&
                entryDate.getFullYear() === value.getFullYear()
            );
        });
    };

    const handleClick = (entry) => {
        navigate(`/${entry.hash}`);
    };

    return (
        <div>
            <Calendar value={value} onChange={setValue} />
            <div>
                {getEntriesForSelectedDate().map((entry, index) => (
                    <div key={index} onClick={() => handleClick(entry)}>
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
