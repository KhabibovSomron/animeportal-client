import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AnimeDetail from '../pages/anime-detail/AnimeDetail';
import AnimePlayerFilm from '../pages/anime-player-film/AnimePlayerFilm';
import AnimePlayer from '../pages/anime-player/AnimePlayer';
import EmailConfirm from '../pages/email-confirm/EmailConfirm';
import Home from '../pages/home/Home';
import ResetPasswordConfirm from '../pages/reset-password-confirm/ResetPasswordConfirm';

interface IAdapterProps {
}

const Adapter: FC<IAdapterProps> = (props) => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="anime/:id/:url/" element={<AnimeDetail />} />
            <Route path="anime/:id/:url/anime-episode/:episode_id" element={<AnimePlayer />} />
            <Route path="anime/:id/:url/anime-film/:film_id" element={<AnimePlayerFilm />} />
            <Route path="password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
            <Route path="activate/:uid/:token" element={<EmailConfirm />} />
        </Routes>
    );
};

export default Adapter;
