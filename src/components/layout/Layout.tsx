import * as React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { checkAuthenticated, loadUser } from '../../redux/actions/UserActions';
import Banner from './banner/Banner';
import Footer from './footer/Footer';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

interface ILayoutProps {
    children: any
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {

    const dispatch = useAppDispatch()
    const userIsAuthenticated = useAppSelector(state => state.user.isAuthenticated)

    React.useEffect(() => {
        dispatch(checkAuthenticated())
    }, [])

    React.useEffect(() => {
        if (userIsAuthenticated) {
            dispatch(loadUser())
        }
    }, [userIsAuthenticated])
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
