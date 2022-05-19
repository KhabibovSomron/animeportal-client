import React, { FC, useEffect, useState } from 'react';
import './Sidebar.css'
import axios from 'axios';
import { GENRES_URL, YEARS_URL } from '../../../endpoints';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootStoreType } from './../../../redux/Store'
import { IFilterGenre, setFilterGenresAction } from '../../../redux/reducers/FilterGenresReducer';
import ReactPlayer from 'react-player';
import { setSearchTitleAction } from '../../../redux/reducers/SearchTitleReducer';

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
    const [title, setTitle] = useState<string>("")
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const res = await axios.get(GENRES_URL)
                setGenres(res.data)

            } catch (err) {
                console.log(err)
            }
        }

        fetchGenres()
     
    }, [])


    const dispatch = useDispatch()
    const filterGenres: IFilterGenre = useSelector((state: RootStoreType) => state.filterGenres)

    const onGenrePeek = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            filterGenres.genres.push(event.target.value)
            dispatch(setFilterGenresAction(filterGenres))
        } else {
            filterGenres.genres = filterGenres.genres.filter(item => item !== event.target.value)
            dispatch(setFilterGenresAction(filterGenres))
        }
    }

    const onSearchChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        
        setTitle(event.target.value)
    }

    const onClickSearchButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(setSearchTitleAction({title: title}))
    }

    return (
        <div className="side-bar col-lg-3">
            <div className="search-bar w3layouts-newsletter">
                <h3 className="sear-head editContent">Поиск аниме</h3>
                <form action="#"className="d-flex editContent">
                    <input type="search" placeholder="Введите название..." className="form-control" onChange={onSearchChangeInput}/>
                    <button className="btn1 btn" onClick={onClickSearchButton}><span className="fa fa-search" aria-hidden="true"></span></button>
                </form>
            </div>
            <form action="{% url 'filter' %}" method="get" name="filter">

                <div className="left-side my-4">
                    <h3 className="sear-head editContent">Жанры</h3>
                    <ul className="w3layouts-box-list">
                        {genres.map((genre, index) =>

                            <li className="editContent" key={index}>
                                <input type="checkbox" className="checked" name="genre" value={genre.id} style={{ margin: '10px' }} onChange={onGenrePeek} />
                                <span className="span editContent">{genre.name}</span>
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
