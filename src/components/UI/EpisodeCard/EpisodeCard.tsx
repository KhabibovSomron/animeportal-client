import React, { FC } from 'react';
import { BASE_URL } from '../../../endpoints';
import { IEpisode } from '../../pages/anime-detail/AnimeDetail';
import './EpisodeCard.css';
interface IEpisodeCardProps {
    episode: IEpisode,
    animeName: string
}

const EpisodeCard: FC<IEpisodeCardProps> = ({episode, animeName}) => {
    return (
        <div className="card card-dv">
            <div className='card-img-top bg-1'>
            <img className='img-background' src={BASE_URL + episode.image} alt={episode.title} />
            <svg className="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="play-svg" aria-labelledby="play-svg" aria-hidden="true" role="img" fill='white'><title id="play-svg">Воспроизвести</title><path d="M5.944 3C5.385 3 5 3.445 5 4.22v16.018c0 .771.384 1.22.945 1.22.234 0 .499-.078.779-.243l13.553-7.972c.949-.558.952-1.468 0-2.028L6.724 3.243C6.444 3.078 6.178 3 5.944 3m1.057 2.726l11.054 6.503L7 18.732l.001-13.006"></path></svg>
            </div>
            <div className="card-body">
                <h5 className="anime-title">{animeName}</h5>
                <h5 className="card-title">{episode.title}</h5>
                <div className='episode-time'>
                    <span className='c-text c-text--m c-meta-tags__tag'>Озвучка</span>
                    <span className='c-text c-text--m c-meta-tags__tag'>125 мин</span>
                </div>
            </div>
        </div>
    );
};

export default EpisodeCard;
