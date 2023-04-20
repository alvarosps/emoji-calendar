import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import EmojiPage from '../pages/EmojiPage/EmojiPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:hash" element={<EmojiPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
