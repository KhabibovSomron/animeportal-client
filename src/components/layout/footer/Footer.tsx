import React, {FC} from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';

interface IFooterProps {
}

const Footer: FC<IFooterProps> = (props) => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>AnimePortal
              </h6>
              <p>
              Стриминговый сервис для людей которые хотят смотреть аниме в высоком качестве.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Разделы</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Главная
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Категории
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Контакты
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Полезные ссылки</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Подписки
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Аккаунт
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Заказы
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Контакты</h6>
              <p>
              <MDBIcon fas icon="home" /> Минск, 220040, Беларусь
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                habibov200@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 375 25 967 98 99
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='#'>
          AnimePortal.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
