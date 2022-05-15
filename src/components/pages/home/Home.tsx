import React, { FC, useEffect } from "react";
import { fetchAnimeList } from "../../api/FetchAnimeData";
import { IAnimeList } from "../../types/AnimeDataType";
import Card from "../../UI/Card/Card";
import './Home.css'

const Home: FC = () => {
    useEffect(() => {
        const result: IAnimeList = fetchAnimeList()
        console.log(result)
    }, [])
    return (
        <div className="home-container col-lg-9">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Home;