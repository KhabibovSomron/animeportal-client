import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { resetPaswordConfirm } from '../../../redux/actions/UserActions';
import './ResetPasswordConfirm.css'
import { Navigate } from 'react-router-dom'
interface IResetPasswordConfirmProps {
}

const ResetPasswordConfirm: FC<IResetPasswordConfirmProps> = (props) => {

    const [confirmSent, setConfirmSent] = useState<boolean>(false)
    const [password, setPassword] = useState<string>("")
    const [rePassword, setRePassword] = useState<string>("")
    const params = useParams()
    const dispatch = useAppDispatch()
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onRePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRePassword(event.target.value)
    }

    const onResetPasswordConfirmClick = () => {
        const uid: any = params.uid
        const token: any = params.token
        if (password === rePassword) {
            dispatch(resetPaswordConfirm(uid, token, password, rePassword))
            setConfirmSent(true)
        } else {
            alert("Пароли не совпадают!")
        }
    }

    if (confirmSent) {
        return <Navigate to={'/'} />
    }

    return (
        <div className='col-lg-9'>
            <div className='container-password'>
                <label htmlFor='passwordInput' className="form-label">Новый пароль</label>
                <input type="password" className="form-control" id="passwordInput" placeholder="Password" onChange={onPasswordChange} />
                <label htmlFor='RePasswordInput' className="form-label">Повторите пароль</label>
                <input type="password" className="form-control" id="RePasswordInput" placeholder="Repeat Password" onChange={onRePasswordChange} />
                <button className="btn btn-dark" style={{ width: '100%' }} onClick={onResetPasswordConfirmClick} >Сменить пароль</button>
            </div>

        </div>
    );
};

export default ResetPasswordConfirm;