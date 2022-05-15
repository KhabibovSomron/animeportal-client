import { faL } from "@fortawesome/free-solid-svg-icons";
import AnimeDetail from "../pages/anime-detail/AnimeDetail";
import Home from "../pages/home/Home";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: false
    },
    {
        path: '/anime/:slug',
        exact: false,
        component: AnimeDetail,
        auth: false
    },
]