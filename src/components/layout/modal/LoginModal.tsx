import React, { FC, useEffect, useState } from 'react';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBTabsContent,
    MDBTabsPane,
} from 'mdb-react-ui-kit';
import './LoginModal.css'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { login } from '../../../redux/actions/UserActions';
import ResetPasswordModal from './reset-password/ResetPasswordModal';

interface ILoginModalProps {
    showModal: boolean,
    setShowModal: Function
}

const LoginModal: FC<ILoginModalProps> = ({ showModal, setShowModal }) => {

    const toggleShow = () => setShowModal(!showModal);
    const [justifyActive, setJustifyActive] = useState<string>('login');
    const user = useAppSelector(state => state.user)
    const [showPasswordReset, setShowPasswordReset] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (user.isAuthenticated) {
            setShowModal(false)
        }
    }, [user])

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onLoginClick = () => {
        dispatch(login(email, password))        
    }

    const onRegisterClick = () => {
        //pass
    }

    const onResetPasswordClick = () => {
        setShowPasswordReset(true)
    }

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
                                    <input type="email" className="form-control" id="emailLoginInput" placeholder="name@example.com" onChange={onEmailChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPasswordLogin" className="form-label">Пароль</label>
                                    <input type="password" className="form-control" id="inputPasswordLogin" onChange={onPasswordChange} />
                                </div>
                                <button className="btn btn-dark" style={{ width: '100%' }} onClick={onLoginClick} >Войти</button>
                                <label className="form-label" style={{margin:'10px 0', textAlign:'center', width: '100%', color:'skyblue'}} onClick={onResetPasswordClick} >Забыл пароль?</label>
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
                                <button className="btn btn-dark" style={{ width: '100%' }} onClick={onRegisterClick} >Регистрация</button>
                            </MDBTabsPane>
                        </MDBTabsContent>
                    </MDBModalBody>

                    <MDBModalFooter>
                        <button className='btn btn-dark' onClick={toggleShow}>
                        Закрыть
                        </button>
                    </MDBModalFooter>
                    <ResetPasswordModal setShowModal={setShowPasswordReset} showModal={showPasswordReset} />
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
};

export default LoginModal;
