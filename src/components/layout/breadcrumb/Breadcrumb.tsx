import React, {FC} from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from 'mdb-react-ui-kit';

interface IBreadcrumbProps {
}

const Breadcrumb: FC<IBreadcrumbProps> = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <MDBContainer fluid>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a href='#'>Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <a href='#'>Library</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <a href='#'>Data</a>
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </MDBContainer>
  </nav>
  );
};

export default Breadcrumb;
