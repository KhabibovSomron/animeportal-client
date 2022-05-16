import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ANIME_LIST_URL } from "../../../endpoints";
import Card from "../../UI/Card/Card";
import './Home.css'

interface IAnimeList {
    id: number,
    title: string,
    url: string,
    poster: string
}

const Home: FC = () => {

    const [animeList, setAnimeList] =  useState<IAnimeList[]>([]) 

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
   
    return (
        <div className="home-container col-lg-9">
            {animeList.map((card, index) =>
            <Card name={card.title} url={card.url}  key={index} id={card.id} poster={card.poster}/>    
                )} 
            
        </div>
    )
}

export default Home;