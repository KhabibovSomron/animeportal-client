import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/layout/Layout';
import Home from './components/pages/home/Home';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimeDetail from './components/pages/anime-detail/AnimeDetail';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout>
      {/* <Home /> */}
      <AnimeDetail />
    </Layout>
  </React.StrictMode>
);