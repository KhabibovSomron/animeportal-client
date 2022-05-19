import ReactDOM from 'react-dom/client';
import Layout from './components/layout/Layout';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Adapter from './components/routes/Adapter';
import { Provider } from 'react-redux';
import Store from './redux/Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Layout>
        <Adapter />

      </Layout>

    </BrowserRouter>
  </Provider>

);