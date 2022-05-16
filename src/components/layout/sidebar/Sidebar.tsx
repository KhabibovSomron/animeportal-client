import { FC, useEffect, useState } from 'react';
import './Sidebar.css'
import axios from 'axios';
import { GENRES_URL, YEARS_URL } from '../../../endpoints';

interface IGenres {
    id: number,
    name: string,
    url: string
}

interface IYears {
    year: number
}

interface ISidebarProps {
}

const Sidebar: FC<ISidebarProps> = (props) => {

    const [genres, setGenres] = useState<IGenres[]>([])
    const [years, setYears] = useState<IYears[]>([])
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const res = await axios.get(GENRES_URL)
                setGenres(res.data)

            } catch (err) {
                console.log(err)
            }
        }

        const fetchYears = async () => {
            try {
                const res = await axios.get(YEARS_URL)
                setYears(res.data)

            } catch (err) {
                console.log(err)
            }
        }

        fetchGenres()
        fetchYears()
    }, [])

    return (
        <div className="side-bar col-lg-3">
            <div className="search-bar w3layouts-newsletter">
                <h3 className="sear-head editContent">Поиск аниме</h3>
                <form action="{% url 'search' %}" method="get" className="d-flex editContent">
                    <input type="search" placeholder="Введите название..." name="q" className="form-control" />
                    <button className="btn1 btn" type="submit"><span className="fa fa-search" aria-hidden="true"></span></button>
                </form>
            </div>
            <form action="{% url 'filter' %}" method="get" name="filter">

                <div className="left-side my-4">
                    <h3 className="sear-head editContent">Жанры</h3>
                    <ul className="w3layouts-box-list">
                        {genres.map((genre, index) =>

                            <li className="editContent" key={index}>
                                <input type="checkbox" className="checked" name="genre" value={genre.id} style={{ margin: '10px' }} />
                                <span className="span editContent">{genre.name}</span>
                            </li>

                        )}


                    </ul>
                </div>


                <div className="left-side">
                    <h3 className="sear-head editContent">Год</h3>
                    <ul className="w3layouts-box-list">
                        {years.map((year, index) =>
                            <li className="editContent" key={index}>
                                <input type="checkbox" className="checked" name="year" value={ year.year } style={{ margin: '10px' }} />
                                <span className="span editContent">{year.year}</span>
                            </li>
                        )}


                    </ul>
                </div>
            </form>
            <div className="customer-rev left-side my-4">
                <h3 className="sear-head editContent">Рейтинг</h3>
                <ul className="w3layouts-box-list">
                    <li>
                        <a href="">
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
