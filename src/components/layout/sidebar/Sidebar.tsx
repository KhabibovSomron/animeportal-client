import { Input } from '@mui/material';
import * as React from 'react';
import './Sidebar.css'

interface ISidebarProps {
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  return (
<div className="side-bar col-lg-3">

    <div className="search-bar w3layouts-newsletter">
        <h3 className="sear-head editContent">Поиск аниме</h3>
        {/* <form action="{% url 'search' %}" method="get" className="d-flex editContent">
            <input type="search" placeholder="Введите название..." name="q" class="form-control" required="">
            <button class="btn1 btn" type="submit"><span class="fa fa-search" aria-hidden="true"></span></button>
        </form> */}
    </div>
    <form action="{% url 'filter' %}" method="get" name="filter">

        <div className="left-side my-4">
            <h3 className="sear-head editContent">Жанры</h3>
            <ul className="w3layouts-box-list">

                <li className="editContent">
                    {/* <input type="checkbox" className="checked" name="genre" value="{{ genre.id }}"> */}
                    <span className="span editContent">genre.name</span>
                </li>

            </ul>
        </div>

    
        <div className="left-side">
            <h3 className="sear-head editContent">Год</h3>
            <ul className="w3layouts-box-list">

                <li className="editContent">
                    {/* <input type="checkbox" className="checked" name="year" value="{{ anime.year }}"> */}
                    <span className="span editContent"> anime.year </span>  
                </li>

            </ul>
        </div>
        <button type="submit">Найти</button>
    </form>
    <div className="customer-rev left-side my-4">
        <h3 className="sear-head editContent">Рейтинг</h3>
        <ul className="w3layouts-box-list">
            <li>
                <a href="#">
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="editContent">5.0</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star-o" aria-hidden="true"></span>
                    <span className="editContent">4.0</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star-half-o" aria-hidden="true"></span>
                    <span className="fa fa-star-o" aria-hidden="true"></span>
                    <span className="editContent">3.5</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star-o" aria-hidden="true"></span>
                    <span className="fa fa-star-o" aria-hidden="true"></span>
                    <span className="editContent">3.0</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star" aria-hidden="true"></span>
                    <span className="fa fa-star-half-o" aria-hidden="true"></span>
                    <span className="fa fa-star-o" aria-hidden="true"></span>
                    <span className="fa fa-star-o" aria-hidden="true"></span>
                    <span className="editContent">2.5</span>
                </a>
            </li>
        </ul>
    </div>
</div>

  );
};

export default Sidebar;
