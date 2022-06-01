import React, { FC, useState } from 'react';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBTabsContent,
} from 'mdb-react-ui-kit';
import './ResetPasswordModal.css'
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { resetPassword } from '../../../../redux/actions/UserActions';

interface IResetPasswordModalProps {
    showModal: boolean,
    setShowModal: Function
}

const ResetPasswordModal: FC<IResetPasswordModalProps> = ({ showModal, setShowModal }) => {

    const toggleShow = () => setShowModal(!showModal);
    

    const [email, setEmail] = useState<string>("")
    let status: boolean = false
    const dispatch = useAppDispatch()

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onResetPasswordClick = () => {
        
    }

    return (
        <MDBModal show={showModal} setShow={setShowModal} tabIndex={-1}>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <div className='modal-container-button'>
                            <h1>Восстоновление пароля</h1>
                        </div>
                    </MDBModalHeader>

                    <MDBModalBody>
                        <MDBTabsContent>
                        <div className="mb-3">
                                    <label htmlFor='emailLoginInput' className="form-label">Электронная почта</label>
                                    <input type="email" className="form-control" id="emailLoginInput" placeholder="name@example.com" onChange={onEmailChange} />
                                </div>
                                <button className="btn btn-dark" style={{ width: '100%' }} >Отправить</button>
                        </MDBTabsContent>
                    </MDBModalBody>

                    <MDBModalFooter>
                        <button className='btn btn-dark' onClick={toggleShow}>
                            Закрыть
                        </button>
                    </MDBModalFooter>
                    
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
};

export default ResetPasswordModal;
