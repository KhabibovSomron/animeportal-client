import React, { FC, useEffect, useState } from 'react';
import './Sidebar.css'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { filterSearchSlice } from '../../../redux/reducers/FilterSearchSlices';
import { fetchGenres } from '../../../redux/actions/AnimeActions';

interface ISidebarProps {
}

const Sidebar: FC<ISidebarProps> = (props) => {

    const dispatch = useAppDispatch()
    const genres = useAppSelector(state => state.animeList.genres)
    const [title, setTitle] = useState<string>("")
    useEffect(() => {
        dispatch(fetchGenres())
    }, [])

    const onGenrePeek = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            dispatch(filterSearchSlice.actions.setFilter(Number(event.target.value)))
        } else {
            dispatch(filterSearchSlice.actions.removeFilter(Number(event.target.value)))
        }
    }

    const onSearchChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onClickSearchButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(filterSearchSlice.actions.setSearch(title))
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
