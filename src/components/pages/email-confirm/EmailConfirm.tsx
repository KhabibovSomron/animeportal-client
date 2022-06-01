import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { signUpActicate } from '../../../redux/actions/UserActions';
import './EmailConfirm.css'
import { Navigate } from 'react-router-dom'
interface IEmailConfirmProps {
}

const EmailConfirm: FC<IEmailConfirmProps> = (props) => {

    const [confirmSent, setConfirmSent] = useState<boolean>(false)
    const params = useParams()
    const dispatch = useAppDispatch()
  
    const onEmailConfirmClick = () => {
        const uid: any = params.uid
        const token: any = params.token
            dispatch(signUpActicate(uid, token))
            setConfirmSent(true)
    }

    if (confirmSent) {
        return <Navigate to={'/'} />
    }

    return (
        <div className='col-lg-9'>
            <div className='container-password'>
                <button className="btn btn-dark" style={{ width: '100%' }} onClick={onEmailConfirmClick} >Подтвердить адрес электронную почту</button>
            </div>

        </div>
    );
};

export default EmailConfirm;