import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/layout/Layout';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimeDetail from './components/pages/anime-detail/AnimeDetail';
import { BrowserRouter } from 'react-router-dom';
import Adapter from './components/routes/Adapter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
      <Adapter />        

      </Layout>

    </BrowserRouter>

  </React.StrictMode>
);