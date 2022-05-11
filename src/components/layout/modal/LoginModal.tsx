import React, { FC, useState } from 'react';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBInput
} from 'mdb-react-ui-kit';
import './LoginModal.css'
interface ILoginModalProps {
    showModal: boolean,
    setShowModal: Function
}

const LoginModal: FC<ILoginModalProps> = ({ showModal, setShowModal }) => {

    const toggleShow = () => setShowModal(!showModal);
    const [justifyActive, setJustifyActive] = useState('login');

    const handleJustifyClick = (value: string) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    return (
        <MDBModal show={showModal} setShow={setShowModal} tabIndex={-1}>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <div className='modal-container-button'>
                            <div>
                                <button className={justifyActive === 'login' ? "btn btn-dark button-modal" : "btn btn-light button-modal"} onClick={() => handleJustifyClick('login')}>
                                    Войти
                                </button>
                            </div>
                            <div>
                                <button onClick={() => handleJustifyClick('register')} className={justifyActive === 'register' ? "btn btn-dark button-modal" : "btn btn-light button-modal"}>
                                    Регистрация
                                </button>
                            </div>





                        </div>
                    </MDBModalHeader>

                    <MDBModalBody>
                        <MDBTabsContent>
                            <MDBTabsPane show={justifyActive === 'login'}>
                                <div className="mb-3">
                                    <label htmlFor='emailLoginInput' className="form-label">Электронная почта</label>
                                    <input type="email" className="form-control" id="emailLoginInput" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPasswordLogin" className="form-label">Пароль</label>
                                    <input type="password" className="form-control" id="inputPasswordLogin" />
                                </div>
                                <button className="btn btn-dark" style={{ width: '100%' }}>Войти</button>
                            </MDBTabsPane>
                            <MDBTabsPane show={justifyActive === 'register'}>
                            <div className="mb-3">
                                    <label htmlFor='usernameRegisterInput' className="form-label">Username</label>
                                    <input type="text" maxLength={30} className="form-control" id="usernameRegisterInput" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor='emailRegisterInput' className="form-label">Электронная почта</label>
                                    <input type="email" className="form-control" id="emailRegisterInput" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPasswordRegister" className="form-label">Пароль</label>
                                    <input type="password" className="form-control" id="inputPasswordRegister" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPasswordRegisterConfirm" className="form-label">Повторить пароль</label>
                                    <input type="password" className="form-control" id="inputPasswordRegisterConfirm" />
                                </div>
                                <button className="btn btn-dark" style={{ width: '100%' }}>Регистрация</button>
                            </MDBTabsPane>
                        </MDBTabsContent>
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

export default LoginModal;
