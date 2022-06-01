import { FC, useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import './Home.css'
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { filterAnimeList, searchAnime } from "../../../redux/actions/FilterSearcgActions";
import { fetchAnimeList } from "../../../redux/actions/AnimeActions";


const Home: FC = () => {

    const animeList = useAppSelector(state => state.animeList.animelist)
    const filterGenres: number[] = useAppSelector(state => state.filterSearch.filter)
    const titleSearch: string = useAppSelector(state => state.filterSearch.search)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAnimeList())
    }, [])

    useEffect(() => {
        dispatch(filterAnimeList(filterGenres))
    }, [filterGenres])
   
    useEffect(() => {
        dispatch(searchAnime(titleSearch))
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