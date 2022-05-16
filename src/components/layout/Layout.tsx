import * as React from 'react';
import Banner from './banner/Banner';
import Footer from './footer/Footer';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

interface ILayoutProps {
    children: any
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <Banner />
            <div className='container-fluid py-md-3'>
                <div className='row' style={{margin:'30px'}}>
                    <Sidebar />
                    {children}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Layout;
