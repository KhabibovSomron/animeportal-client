import React, { FC, useEffect, useRef } from 'react';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter
} from 'mdb-react-ui-kit';
import ReactPlayer from 'react-player'
import './VideoModal.css';


interface IVideoModalProps {
    showModal: boolean,
    setShowModal: Function
}

const VideoModal: FC<IVideoModalProps> = ({ showModal, setShowModal}) => {

    const toggleShow = () => setShowModal(!showModal);
    
    return (
        <MDBModal show={showModal} setShow={setShowModal} tabIndex={-1}>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <div className='modal-container-button'>
                        </div>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div className='data-vjs-player'>
                            <ReactPlayer url="http://127.0.0.1:8000/stream/1/" muted={false} controls={true} />
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
