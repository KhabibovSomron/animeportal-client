import React, { FC, useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import LoginModal from '../modal/LoginModal';
interface IHeaderProps {

}

const Header: FC<IHeaderProps> = (props) => {

  const [showBasic, setShowBasic] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleShow = () => setShowModal(!showModal);
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid style={{margin:'0 30px'}}>
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
                Главная
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Категория
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Action</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <button className='btn btn-dark' onClick={toggleShow}>Войти</button>
          <LoginModal showModal={showModal} setShowModal={setShowModal} />
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
