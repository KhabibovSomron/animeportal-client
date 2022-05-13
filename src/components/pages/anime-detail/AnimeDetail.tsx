import React, { FC, useState } from 'react';
import VideoModal from '../../layout/modal/modal-video/VideoModal';
import EpisodeCard from '../../UI/EpisodeCard/EpisodeCard';
import './AnimeDetail.css'
interface IAnimeDetailProps {
}

const AnimeDetail: FC<IAnimeDetailProps> = (props) => {

    const [showModal, setShowModal] = useState(false);
    const toggleShow = () => setShowModal(!showModal);
    const videoPlayerOptions = {
        controls: true,
        sources: [{
            src: "http://127.0.0.1:8000/stream/1/",
            type: "video/mp4"
        }]
    }
    return (
        <div className='left-ads-display col-lg-8'>
            <div className="body">
                <div className="hero-heading-line">
                    <h1 className="c-heading c-heading--l c-heading--family-type-one title">
                        Фена: Принцесса пиратов
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
                    <span><b>Год выпуска:</b> 2016</span>
                    </li>
                    <li>
                    <span><b>Главные герои:</b>
                    <a href="{{ character.get_absolute_url }}">Томиёка Гию</a>
                </span>
                    </li>
                    <li>
                    <span><b>Жанры:</b>
                    Романтика
                    </span>
                    </li>
                    <li>
                    <form action="{% url 'add_rating' %}" method="post" name="rating">
                    <b>Рейтинг:</b>
                    <input type="hidden" value="{{ anime.id }}" name="anime" />
                    <span className="rating">
                        <input id="rating{{ v }}" type="radio" name="star" value="{{ k }}" />
                        <label htmlFor="rating{{ v }}"></label>
                    </span>
                    <span className="editContent">5</span>
                </form>
                    </li>
                </ul>
                
                
                

            </div>
            <div className="row sub-para-w3layouts mt-5">
                <p>
                    <img src="" className="img-anime-shots" alt="image.description" />
                </p>
                <p className="editContent">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam, repellat, voluptates mollitia dignissimos similique numquam eaque recusandae, ipsam officia perferendis facere soluta. Illum officia libero illo nulla asperiores? Molestias.
                </p>
                <p className="mt-3 italic-blue editContent">
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/NooIc3dMncc"
                        frameBorder={0} allow="accelerometer; autoplay;
                                                               encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                    </iframe>
                </p>
            </div>
            <hr />
            <div className='anime-container'>
                <h1 className="c-heading c-heading--l c-heading--family-type-one title" style={{ textAlign: 'center' }}>
                    Смотреть твоё имя все серии
                </h1>
                <hr />
                <div className='sesson-container'>
                    <h1 className="c-heading c-heading--l c-heading--family-type-one title" style={{ textAlign: 'center', fontSize: '20px' }}>
                        1 сезон
                    </h1>
                    <div className='episode'>
                        <EpisodeCard toggleShow={toggleShow}/>
                        <EpisodeCard toggleShow={toggleShow}/>
                        <EpisodeCard toggleShow={toggleShow}/>
                    </div>
                    <VideoModal showModal={showModal} setShowModal={setShowModal} />
                </div>
            </div>
        </div>
    );
};

export default AnimeDetail;
