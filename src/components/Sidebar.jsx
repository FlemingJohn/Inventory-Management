import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className={isActive('/')}>
                            <Link to="/"><img src="/assets/img/icons/dashboard.svg" alt="img" /><span> Dashboard</span> </Link>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/product.svg" alt="img" /><span> Product</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/products')} to="/products">Product List</Link></li>
                                <li><Link className={isActive('/add-product')} to="/add-product">Add Product</Link></li>
                                <li><Link className={isActive('/categories')} to="/categories">Category List</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
