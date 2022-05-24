import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ANIME_DETAIL_URL, BASE_URL, RATING_STAR_URL, SHOTS_URL } from '../../../endpoints';
import VideoModal from '../../layout/modal/modal-video/VideoModal';
import EpisodeCard from '../../UI/EpisodeCard/EpisodeCard';
import './AnimeDetail.css'

export interface IEpisode {
    id: number,
    title: string,
    number: number,
    image: string,
    video: string
}

interface ISeason {
    id: number,
    episodes: IEpisode[],
    number: number,
    year: number,
    title: string
}

interface IAnimeDetail {
    id: number,
    genres: string[],
    seasons: ISeason[],
    title: string,
    description: string,
    poster: string,
    url: string,
    trailer: string
}

const defaultValue: IAnimeDetail = {
    id: 0,
    genres: [],
    seasons: [],
    title: "",
    description: "",
    poster: "",
    url: "",
    trailer: ""
}

interface IRatingStar {
    id: number,
    value: number
}

interface IShots {
    id: number,
    title: string,
    image: string
}


interface IAnimeDetailProps {
}

const AnimeDetail: FC<IAnimeDetailProps> = (props) => {

    const [showModal, setShowModal] = useState(false);
    const toggleShow = () => setShowModal(!showModal);
    const params = useParams()
    const [anime, setAnime] = useState<IAnimeDetail>(defaultValue)
    const [ratingStar, setRatingStar] = useState<IRatingStar[]>([])
    const [shots, setShots] = useState<IShots[]>([])

    useEffect(() => {
        const fetchAnimeDetail = async () => {
            try {
                const res = await axios.get(ANIME_DETAIL_URL + `${params.id}`)
                console.log(res.data)
                setAnime(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        const fetchRatingStar = async () => {
            try {
                const res = await axios.get(RATING_STAR_URL)
                setRatingStar(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAnimeDetail()
        fetchRatingStar()
    }, [])

    useEffect(() => {
        const fetchShots = async () => {
            try {
                const res = await axios.get(SHOTS_URL + `${anime.id}/`)
                setShots(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchShots()
    }, [anime])

    return (
        <div className='left-ads-display col-lg-8'>
            <div className="body">
                <div className="hero-heading-line">
                    <h1 className="c-heading c-heading--l c-heading--family-type-one title">
                        {anime.title}
                    </h1>
                    <div className="heading-share-button"></div>
                </div>
                <div className="erc-series-tags tags">
                    <div className="c-meta-tags">
                        <span className="c-text c-text--m c-meta-tags__tag">
                            12 Видео
                        </span>
                        <span className="c-text c-text--m c-meta-tags__tag">
                            18+
                        </span>
                    </div>
                </div>
                <ul className='table-detail'>
                    <li>
                        <span><b>Год выпуска:</b> {anime.seasons.map(season => season.year)}</span>
                    </li>
                    <li>
                        <span><b>Главные герои:</b>
                            <a href="{{ character.get_absolute_url }}">Томиёка Гию</a>
                        </span>
                    </li>
                    <li>
                        <span><b>Жанры:</b>
                            {anime.genres.map((genre, index) => <span key={index}> {genre} </span>)}
                        </span>
                    </li>
                    <li>
                        <form action="{% url 'add_rating' %}" method="post" name="rating">
                            <b>Рейтинг:</b>
                            <input type="hidden" value={anime.id} name="anime" />
                            {ratingStar.map(star =>
                                <span className="rating" key={star.id}>
                                    <input id={`rating${star.value}`} type="radio" name="star" value={star.id} />
                                    <label htmlFor={`rating${star.value}`}></label>
                                </span>
                            )}
                        </form>
                    </li>
                </ul>
            </div>
            <div className="row sub-para-w3layouts mt-5">
                <h1 className='c-heading c-heading--l c-heading--family-type-one title'>Кадры из аниме {anime.title}</h1>
                <p>
                    {shots.map(shot =>
                        <img src={BASE_URL + shot.image} className="img-anime-shots" alt={shot.title} key={shot.id}  style={{margin: '10px'}}/>
                    )}

                </p>
                <p className="editContent">
                    {anime.description}
                </p>
                <p className="mt-3 italic-blue editContent">
                    <iframe width="560" height="315" title='trailer'
                        src={anime.trailer}
                        frameBorder={0} allow="accelerometer; autoplay;
                                                               encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                    </iframe>
                </p>
            </div>
            <hr />
            <div className='anime-container'>
                <h1 className="c-heading c-heading--l c-heading--family-type-one title" style={{ textAlign: 'center' }}>
                    Смотреть {anime.title} все серии
                </h1>
                <hr />
                {anime.seasons.map((season, index) =>
                    <div className='sesson-container' key={index}>
                        <h1 className="c-heading c-heading--l c-heading--family-type-one title" style={{ textAlign: 'center', fontSize: '20px' }}>
                            {season.title}
                        </h1>
                        <div className='episode'>
                            {season.episodes.map((episode, index) =>
                                <EpisodeCard key={index} episode={episode} animeName={anime.title} />
                            )}
                        </div>
                        <hr />
                    </div>
                )}

            </div>
        </div>
    );
};

export default AnimeDetail;
