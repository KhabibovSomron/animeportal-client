import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';
import { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { EPISODE_URL } from '../../../endpoints';
import { IEpisode } from '../anime-detail/AnimeDetail';
import './AnimePlayer.css'

interface IPlayerState {
    playing: boolean,
    muted: boolean
}

interface IAnimePlayerProps {
}

const AnimePlayer: FC<IAnimePlayerProps> = (props) => {

    const [playerState, setPlayerState] = useState<IPlayerState>({
        playing: false,
        muted: false
    })
    const params = useParams()
    const [episode, setEpisode] = useState<IEpisode>({
        id: 0,
        image: "",
        number: 0,
        title: "",
        video: "",
    })

    useEffect(() => {
        const fetchEpisodeData = async () => {
            try {
                const res = await axios.get(EPISODE_URL + `${params.episode_id}/`)
                setEpisode(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchEpisodeData()
    }, [])

    const playPausehandler = () => {
        setPlayerState({ ...playerState, playing: !playerState.playing })
    }

    const muteHandler = () => {
        setPlayerState({...playerState, muted: !playerState.muted})

    }


    return (
        <div className='left-ads-display col-lg-8'>
            <hr />
            <h2>{params.url} {episode.title}</h2>
            <hr />
            <div className='player-wrapper'>
                <ReactPlayer width={"100%"} height={"100%"} url={`http://127.0.0.1:8000/stream/${episode.id}/`}
                    playing={playerState.playing}
                    muted={playerState.muted}
                />
                <div className='controls-wrapper'>
                    <div className='row grid-row-video-top'>

                    </div>
                    <div className='grid-row-video-middle'>
                        <button onClick={playPausehandler} >
                            {
                                playerState.playing ?
                                    <MDBIcon fas icon="pause" /> :
                                    <MDBIcon fas icon="play" />
                            }
                        </button>
                    </div>
                    <div className='grid-row-video-bottom'>
                        <input type="range" min={1} max={100} className='slider' defaultValue={0} />
                        <div className='under-slider'>
                            <div className='left-side'>
                                <button onClick={playPausehandler}>{
                                    playerState.playing ?
                                        <MDBIcon fas icon="pause" /> :
                                        <MDBIcon fas icon="play" />
                                }</button>
                                <div className='volume-slider'>
                                    <button onClick={muteHandler}>
                                        { playerState.muted ?
                                        <MDBIcon fas icon="volume-mute" />:
                                            <MDBIcon fas icon="volume-up" />
                                            }
                                        
                                    </button>
                                    <input type="range" min={1} max={100} defaultValue={100} />
                                </div>
                                <p>00:00</p>
                            </div>
                            <div className='right-side'>
                                <button><MDBIcon fas icon="expand" /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimePlayer;
