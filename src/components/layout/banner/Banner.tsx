import React, {FC} from 'react';
import './Banner.css'

interface IAppProps {
}

const Banner:FC<IAppProps> = (props) => {
  return (
    <div className='main-banner inner bg bg1' id='home'>
    </div>
  );
};

export default Banner;
