import { Grid } from '@mui/material';
import * as React from 'react';
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
            <div className='row-md'>
                Bunner
            </div>
                <div className='row'>
                <Sidebar />
                {children}
                </div>
            <Footer />
        </>
    );
};

export default Layout;
