import React, { FC, useEffect, useRef } from 'react';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBIcon,
    MDBRange
} from 'mdb-react-ui-kit';
import ReactPlayer from 'react-player'
import './VideoModal.css';
import { dividerClasses } from '@mui/material';


interface IVideoModalProps {
    showModal: boolean,
    setShowModal: Function
}

const VideoModal: FC<IVideoModalProps> = ({ showModal, setShowModal }) => {

    const toggleShow = () => setShowModal(!showModal);

    return (
        <MDBModal show={showModal} setShow={setShowModal} tabIndex={-1}>
            <MDBModalDialog size='xl'>
                <MDBModalContent>
                    <MDBModalHeader>
                        <div className='modal-container-button'>
                        </div>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div className='player-wrapper'>
                            <ReactPlayer width={"100%"} height={"100%"} url="http://127.0.0.1:8000/stream/1/"
                                playing={true}
                            />
                            <div className='controls-wrapper'>
                                <div className='row grid-row-video-top'>

                                </div>
                                <div className='grid-row-video-middle'>
                                    <button><MDBIcon fas icon="backward" /></button>
                                    <button><MDBIcon fas icon="play" /></button>
                                    <button><MDBIcon fas icon="forward" /></button>
                                </div>
                                <div className='grid-row-video-bottom'>
                                    <input type="range" min={1} max={100} className='slider' defaultValue={0} />
                                    <div className='under-slider'>
                                        <div className='left-side'>
                                            <button><MDBIcon fas icon="play" /></button>
                                            <div className='volume-slider'>
                                                <button><MDBIcon fas icon="volume-up" /></button>
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
                    </MDBModalBody>

                    <MDBModalFooter>
                        <button className='btn btn-dark' onClick={toggleShow}>
                            Close
                        </button>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
};

export default VideoModal;
