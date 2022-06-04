
import { FC, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../endpoints';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchAnimeDetails, fetchAnimeShots, fetchFilms } from '../../../redux/actions/AnimeDetailAction';
import EpisodeCard from '../../UI/EpisodeCard/EpisodeCard';
import FilmCard from '../../UI/Film-Card/FilmCard';
import './AnimeDetail.css'




interface IAnimeDetailProps {
}

const AnimeDetail: FC<IAnimeDetailProps> = (props) => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const anime = useAppSelector(state => state.animeDetail)

    useEffect(() => {
        dispatch(fetchAnimeDetails(Number(params.id)))
        dispatch(fetchAnimeShots(Number(params.id)))
        dispatch(fetchFilms(Number(params.id)))
    }, [])

    const videoCount = useMemo(() => {
        let value = 0
        anime.details.seasons.forEach((season) => {
            value += season.episodes.length
        })
        value += anime.films.length
        return value
    }, [anime])

    return (
        <div className='left-ads-display col-lg-8'>
            <div className="body">
                <div className="hero-heading-line">
                    <h1 className="c-heading c-heading--l c-heading--family-type-one title">
                        {anime.details.title}
                    </h1>
                    <div className="heading-share-button"></div>
                </div>
                <div className="erc-series-tags tags">
                    <div className="c-meta-tags">
                        <span className="c-text c-text--m c-meta-tags__tag">
                            {videoCount} Видео
                        </span>
                        <span className="c-text c-text--m c-meta-tags__tag">
                            {anime.details.ageRating}
                        </span>
                    </div>
                </div>
                <ul className='table-detail'>
                    <li>
                        <span><b>Год выпуска:</b> {anime.details.seasons.map((season, index) => {
                            if (index === anime.details.seasons.length - 1) {
                                return <span key={index}> {season.year}</span>
                            } else {
                                return <span key={index}> {season.year},</span>
                            }
                        }
                        )}</span>
                    </li>
                    <li>
                        <span> <b>Жанры:</b>
                            {anime.details.genres.map((genre, index) => {
                                if (index === anime.details.genres.length - 1) {
                                    return <span key={index}> {genre}</span>
                                } else {
                                    return <span key={index}> {genre},</span>
                                }
                            }

                            )}
                        </span>
                    </li>
                    {/* <li>
                        <form action="{% url 'add_rating' %}" method="post" name="rating">
                            <b>Рейтинг:</b>
                            <input type="hidden" value={anime.id} name="anime" />
                            {anime.ratingStar.map(star =>
                                <span className="rating" key={star.id}>
                                    <input id={`rating${star.value}`} type="radio" name="star" value={star.id} />
                                    <label htmlFor={`rating${star.value}`}></label>
                                </span>
                            )}
                        </form>
                    </li> */}
                </ul>
            </div>
            <div className="row sub-para-w3layouts mt-5">
                <h1 className='c-heading c-heading--l c-heading--family-type-one title'>Кадры из аниме {anime.details.title}</h1>
                <p>
                    {anime.shots.map(shot =>
                        <img src={BASE_URL + shot.image} className="img-anime-shots" alt={shot.title} key={shot.id} style={{ margin: '10px' }} />
                    )}

                </p>
                <p className="editContent">
                    {anime.details.description}
                </p>
                <p className="mt-3 italic-blue editContent">
                    <iframe width="560" height="315" title='trailer'
                        src={anime.details.trailer}
                        frameBorder={0} allow="accelerometer; autoplay;
                                                               encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                    </iframe>
                </p>
            </div>
            <hr />
            <div className='anime-container'>
                <h1 className="c-heading c-heading--l c-heading--family-type-one title" style={{ textAlign: 'center' }}>
                    Смотреть {anime.details.title} все серии
                </h1>
                <hr />
                {anime.details.seasons.map((season, index) =>
                    <div className='sesson-container' key={index}>
                        <h1 className="c-heading c-heading--l c-heading--family-type-one title" style={{ textAlign: 'center', fontSize: '20px' }}>
                            {season.title}
                        </h1>
                        <div className='episode'>
                            {season.episodes.map((episode, index) =>
                                <EpisodeCard key={index} episode={episode} animeName={anime.details.title} />
                            )}
                        </div>
                        <hr />
                    </div>
                )}
                {anime.films.length !== 0 ?
                    <div className='sesson-container'>
                        <h1 className="c-heading c-heading--l c-heading--family-type-one title" style={{ textAlign: 'center', fontSize: '25px' }}>
                            Фильмы
                        </h1>
                        <hr/>
                        <div className='episode'>
                            {anime.films.map((film, index) =>
                                <FilmCard key={index} film={film} animeName={anime.details.title} />
                            )}
                        </div>
                        <hr />
                    </div>
                    : <>
                    </>
            }

            </div>
        </div>
    );
};

export default AnimeDetail;
