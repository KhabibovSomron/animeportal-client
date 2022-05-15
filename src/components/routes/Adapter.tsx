import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AnimeDetail from '../pages/anime-detail/AnimeDetail';
import Home from '../pages/home/Home';

interface IAdapterProps {
}

const Adapter: FC<IAdapterProps> = (props) => {
    const isAuth = false
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime/:slug" element={<AnimeDetail />} />
        </Routes>
    );
};

export default Adapter;
