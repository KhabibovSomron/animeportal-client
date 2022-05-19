import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ANIME_LIST_URL, FILTER_URL, SEARCH_URL } from "../../../endpoints";
import { IFilterGenre } from "../../../redux/reducers/FilterGenresReducer";
import { RootStoreType } from "../../../redux/Store";
import Card from "../../UI/Card/Card";
import './Home.css'
import qs from 'qs'
import { ISearchTitle } from "../../../redux/reducers/SearchTitleReducer";
interface IAnimeList {
    id: number,
    title: string,
    url: string,
    poster: string
}

const Home: FC = () => {

    const [animeList, setAnimeList] =  useState<IAnimeList[]>([]) 
    const filterGenres: IFilterGenre = useSelector((state: RootStoreType) => state.filterGenres)
    const titleSearch: ISearchTitle = useSelector((state: RootStoreType) => state.searchTitle)
    useEffect(() => {
    const fetchAnimeList = async () => {
        try {
            const res = await axios.get(ANIME_LIST_URL)
            setAnimeList(res.data)
            
        } catch (err) {
            console.log(err)
        }
    }
    fetchAnimeList()
    
    }, [])

    useEffect(() => {
        const fetchAnimeFilterList =async () => {
            
            try {
                let new_url = FILTER_URL + '?'
                filterGenres.genres.forEach((item, index) => {
                    if (index === 0) {
                        new_url = new_url + `genres=${item}`
                    } else {
                        new_url = new_url + `&genres=${item}`
                    }
                })
                const res = await axios.get(new_url)
                console.log(res.data)
                setAnimeList(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchAnimeFilterList()
    }, [filterGenres])
   
    useEffect(() => {
        const fetchAnimeSearchList =async () => {
            
            try {
                const res = await axios.get(SEARCH_URL, {
                    params: {
                        "title": titleSearch.title
                    }
                })
                console.log(res.data)
                setAnimeList(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchAnimeSearchList()
    }, [titleSearch])

    return (
        <div className="home-container col-lg-9">
            {animeList.map((card, index) =>
            <Card name={card.title} url={card.url}  key={index} id={card.id} poster={card.poster}/>    
                )} 
            
        </div>
    )
}

export default Home;