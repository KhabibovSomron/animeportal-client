import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { EPISODE_URL } from '../../../endpoints';
import { IEpisode } from '../anime-detail/AnimeDetail';
import './AnimePlayer.css'
import screenfull from 'screenfull'
import {BaseReactPlayerProps} from 'react-player/base'

interface IPlayerState {
    playing: boolean,
    muted: boolean,
    volume: number,
    played: number,
    playedSeconds: number
}

interface IAnimePlayerProps {
}

const format = (seconds: any) => {
    if (seconds === '00:00') {
        return seconds
    }

    const date = new Date(seconds * 1000)
    const hh = date.getUTCHours()
    const mm = date.getUTCMinutes()
    const ss = date.getUTCSeconds().toString().padStart(2, '0')

    if (hh) {
        return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`
    }

    return `${mm}:${ss}`
}

const AnimePlayer: FC<IAnimePlayerProps> = (props) => {

    const [playerState, setPlayerState] = useState<IPlayerState>({
        playing: false,
        muted: false,
        volume: 0.5,
        played: 0,
        playedSeconds: 0
    })
    const params = useParams()
    const [episode, setEpisode] = useState<IEpisode>({
        id: 0,
        image: "",
        number: 0,
        title: "",
        video: "",
    })

    const playerContainerRef = useRef(null)
    const playerRef = useRef(null)
    let count = 0;
    const [contolVisibility, setControlVisibility] = useState<boolean>(true)
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
        setPlayerState({...playerState, muted: !playerState.muted, volume: playerState.muted? 0.5: 0})

    }

    const onVolumeSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerState({...playerState, volume: parseFloat(event.target.value)/100, muted: Number(event.target.value) === 0 ? true: false})
    }

    const toggleFullScreen = () => {
        screenfull.toggle(playerContainerRef.current!)
    }

    const onProgressChange = (changeState: any) => {
        setPlayerState({...playerState, played: changeState.played, playedSeconds: changeState.playedSeconds})
        if (count > 0) {
            count --
        } else {
            setControlVisibility(false)
        }
    }

    const seekToChange = (curentPlayerRef: BaseReactPlayerProps, newValue: number) => {
        if (curentPlayerRef) {
            curentPlayerRef.seekTo(newValue / 100)
        }
    }

    const customGetCurrentTime = (curentPlayerRef: BaseReactPlayerProps): string => {
        return curentPlayerRef ? curentPlayerRef.getCurrentTime() : '00: 00'
    }

    const customGetDuration = (curentPlayerRef: BaseReactPlayerProps): string => {
        return curentPlayerRef ? curentPlayerRef.getDuration() : '00: 00'
    }

    const elapsedTime = format(customGetCurrentTime(playerRef.current!))
    const totalDuration = format(customGetDuration(playerRef.current!))

    const onProgressSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerState({...playerState, played: parseFloat(event.target.value) / 100})
        seekToChange(playerRef.current!, Number(event.target.value))
        console.log(playerState.playedSeconds)
    }

    const onMouseMoveHandler = () => {
        setControlVisibility(true)
        count = 3
    }

    return (
        <div className='left-ads-display col-lg-8'>
            <hr />
            <h2>{params.url} {episode.title}</h2>
            <hr />
            <div ref={playerContainerRef} className='player-wrapper' onMouseMove={onMouseMoveHandler}>
                <ReactPlayer width={"100%"} height={"100%"} url={`http://127.0.0.1:8000/stream/${episode.id}/`}
                    ref={playerRef}
                    playing={playerState.playing}
                    muted={playerState.muted}
                    volume={playerState.volume}
                    onProgress={onProgressChange}    
                />
                <div className='controls-wrapper' style={contolVisibility?{display:'flex'}:{display:'none'}}>
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
                        <input type="range" min={0} max={100} className='slider' value={playerState.played * 100} onChange={onProgressSliderChange} />
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
                                    <input type="range" min={0} max={100} onChange={onVolumeSliderChange}  value={playerState.volume * 100}/>
                                </div>
                                <p>{elapsedTime}/{totalDuration}</p>
                            </div>
                            <div className='right-side'>
                                <button onClick={toggleFullScreen}><MDBIcon fas icon="expand" /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimePlayer;
