import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left active">
                <Link to="/" className="logo">
                    <img src="/assets/img/logo.png" alt="Logo" />
                </Link>
                <Link to="/" className="logo-small">
                    <img src="/assets/img/logo-small.png" alt="Logo Small" />
                </Link>
                <a id="toggle_btn" href="javascript:void(0);"></a>
            </div>

            <a id="mobile_btn" className="mobile_btn" href="#sidebar">
                <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>

            <ul className="nav user-menu">
                <li className="nav-item">
                    <div className="top-nav-search">
                        <a href="javascript:void(0);" className="responsive-search">
                            <i className="fa fa-search"></i>
                        </a>
                        <form action="#">
                            <div className="searchinputs">
                                <input type="text" placeholder="Search Here ..." />
                                <div className="search-addon">
                                    <span><img src="/assets/img/icons/closes.svg" alt="Close" /></span>
                                </div>
                            </div>
                            <a className="btn" id="searchdiv"><img src="/assets/img/icons/search.svg" alt="Search" /></a>
                        </form>
                    </div>
                </li>

                <li className="nav-item dropdown has-arrow flag-nav">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
                        <img src="/assets/img/flags/us1.png" alt="US Flag" height="20" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="/assets/img/flags/us.png" alt="English" height="16" /> English
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="/assets/img/flags/fr.png" alt="French" height="16" /> French
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="/assets/img/flags/es.png" alt="Spanish" height="16" /> Spanish
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="/assets/img/flags/de.png" alt="German" height="16" /> German
                        </a>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <a href="javascript:void(0);" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <img src="/assets/img/icons/notification-bing.svg" alt="Notifications" /> <span className="badge rounded-pill">4</span>
                    </a>
                    <div className="dropdown-menu notifications">
                        <div className="topnav-dropdown-header">
                            <span className="notification-title">Notifications</span>
                            <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
                        </div>
                        <div className="noti-content">
                            <ul className="notification-list">
                                <li className="notification-message">
                                    <Link to="/activities">
                                        <div className="media d-flex">
                                            <span className="avatar flex-shrink-0">
                                                <img alt="Avatar" src="/assets/img/profiles/avatar-02.jpg" />
                                            </span>
                                            <div className="media-body flex-grow-1">
                                                <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                                                <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="topnav-dropdown-footer">
                            <Link to="/activities">View all Notifications</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item dropdown has-arrow main-drop">
                    <a href="javascript:void(0);" className="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
                        <span className="user-img"><img src="/assets/img/profiles/avator1.jpg" alt="User" />
                            <span className="status online"></span></span>
                    </a>
                    <div className="dropdown-menu menu-drop-user">
                        <div className="profilename">
                            <div className="profileset">
                                <span className="user-img"><img src="/assets/img/profiles/avator1.jpg" alt="User" />
                                    <span className="status online"></span></span>
                                <div className="profilesets">
                                    <h6>John Doe</h6>
                                    <h5>Admin</h5>
                                </div>
                            </div>
                            <hr className="m-0" />
                            <Link className="dropdown-item" to="/profile"> <i className="me-2" data-feather="user"></i> My Profile</Link>
                            <Link className="dropdown-item" to="/general-settings"><i className="me-2" data-feather="settings"></i>Settings</Link>
                            <hr className="m-0" />
                            <Link className="dropdown-item logout pb-0" to="/signin"><img src="/assets/img/icons/log-out.svg" className="me-2" alt="Logout" />Logout</Link>
                        </div>
                    </div>
                </li>
            </ul>

            <div className="dropdown mobile-user-menu">
                <a href="javascript:void(0);" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/profile">My Profile</Link>
                    <Link className="dropdown-item" to="/general-settings">Settings</Link>
                    <Link className="dropdown-item" to="/signin">Logout</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
