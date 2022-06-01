import ReactDOM from 'react-dom/client';
import Layout from './components/layout/Layout';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Adapter from './components/routes/Adapter';
import { Provider } from 'react-redux';
import  store from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Adapter />

      </Layout>

    </BrowserRouter>
  </Provider>

);