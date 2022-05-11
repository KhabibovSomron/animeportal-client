import React, { FC } from 'react';
import './Card.css'
interface ICardProps {
}

const Card: FC<ICardProps> = (props) => {
    return (
        <div className="card card-dv">
            <img src={require("./Kimi_no_Na_wa.jpg")} className='card-img-top' alt="" />
                <div className="card-body">
                    <h5 className="card-title">Your Name</h5>
                </div>
        </div>
    );
};

export default Card;
