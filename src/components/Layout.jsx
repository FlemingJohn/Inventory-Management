import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="main-wrapper">
            <Header />
            <Sidebar />
            <div className="page-wrapper">
                {children}
            </div>
        </div>
    );
};

export default Layout;
