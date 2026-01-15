import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const location = useLocation();
    const isPOS = location.pathname === '/pos';

    return (
        <div className={isPOS ? "main-wrappers" : "main-wrapper"}>
            <Header />
            {!isPOS && <Sidebar />}
            <div className={isPOS ? "page-wrapper ms-0" : "page-wrapper"}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
