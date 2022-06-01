import { FC, useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import LoginModal from '../modal/LoginModal';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CATEGORIES_URL } from '../../../endpoints';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchCategories } from '../../../redux/actions/AnimeActions';
import { loadUser, logout } from '../../../redux/actions/UserActions';

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = (props) => {

  const [showBasic, setShowBasic] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const user = useAppSelector(state => state.user)
  const categories = useAppSelector(state => state.animeList.categories)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const onLogOutClick = () => {
    dispatch(logout())
  }

  const toggleShow = () => setShowModal(!showModal);
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid style={{ margin: '0 30px' }}>
        <MDBNavbarBrand href='#' style={{ fontWeight: 700 }}>AnimePortal</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                <Link to={'/'} style={{ textDecoration: 'none', color: "gray" }}>
                  Главная
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Категория
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {categories.map(category =>
                    <MDBDropdownItem key={category.id}>
                      <MDBDropdownLink >{category.name}</MDBDropdownLink>
                    </MDBDropdownItem>
                  )}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
          {user.isAuthenticated ?
            <h2 style={{textAlignLast: 'start'}}>{user.user?.name}</h2> :
            <button className='btn btn-dark' onClick={toggleShow}>Войти</button>
          }

          {
          user.isAuthenticated ?
            <button className='btn btn-light' onClick={onLogOutClick} style={{padding:'0 10px'}}>Выйти</button>:
            <></>
          }
          <LoginModal showModal={showModal} setShowModal={setShowModal} />
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
