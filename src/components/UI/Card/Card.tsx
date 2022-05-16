import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../endpoints';
import './Card.css'
interface ICardProps {
    id: number,
    name: string,
    url: string,
    poster: string
}

const Card: FC<ICardProps> = ({ id, name, url, poster }) => {
    return (
        <Link to={`anime/${id}/${url}`}>
            <div className="card card-dv">
                <img src={BASE_URL + poster} className='card-img-top' alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </Link>

    );
};

export default Card;
