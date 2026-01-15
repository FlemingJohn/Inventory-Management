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
                                <li><Link className={isActive('/add-category')} to="/add-category">Add Category</Link></li>
                                <li><Link className={isActive('/sub-categories')} to="/sub-categories">Sub Category List</Link></li>
                                <li><Link className={isActive('/add-sub-category')} to="/add-sub-category">Add Sub Category</Link></li>
                                <li><Link className={isActive('/brands')} to="/brands">Brand List</Link></li>
                                <li><Link className={isActive('/add-brand')} to="/add-brand">Add Brand</Link></li>
                                <li><Link className={isActive('/import-products')} to="/import-products">Import Products</Link></li>
                                <li><Link className={isActive('/barcode')} to="/barcode">Print Barcode</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/sales1.svg" alt="img" /><span> Sales</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/sales')} to="/sales">Sales List</Link></li>
                                <li><Link className={isActive('/pos')} to="/pos">POS</Link></li>
                                <li><Link className={isActive('/add-sales')} to="/add-sales">New Sales</Link></li>
                                <li><Link className={isActive('/sales-return')} to="/sales-return">Sales Return List</Link></li>
                                <li><Link className={isActive('/add-sales-return')} to="/add-sales-return">New Sales Return</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/purchase1.svg" alt="img" /><span> Purchase</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/purchases')} to="/purchases">Purchase List</Link></li>
                                <li><Link className={isActive('/add-purchase')} to="/add-purchase">Add Purchase</Link></li>
                                <li><Link className={isActive('/import-purchase')} to="/import-purchase">Import Purchase</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/expense1.svg" alt="img" /><span> Expense</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/expenses')} to="/expenses">Expense List</Link></li>
                                <li><Link className={isActive('/add-expense')} to="/add-expense">Add Expense</Link></li>
                                <li><Link className={isActive('/expense-category')} to="/expense-category">Expense Category</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/quotation1.svg" alt="img" /><span> Quotation</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/quotations')} to="/quotations">Quotation List</Link></li>
                                <li><Link className={isActive('/add-quotation')} to="/add-quotation">Add Quotation</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/transfer1.svg" alt="img" /><span> Transfer</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/transfers')} to="/transfers">Transfer List</Link></li>
                                <li><Link className={isActive('/add-transfer')} to="/add-transfer">Add Transfer</Link></li>
                                <li><Link className={isActive('/import-transfer')} to="/import-transfer">Import Transfer</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/return1.svg" alt="img" /><span> Return</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/sales-return-list')} to="/sales-return-list">Sales Return List</Link></li>
                                <li><Link className={isActive('/add-sales-return-new')} to="/add-sales-return-new">Add Sales Return</Link></li>
                                <li><Link className={isActive('/purchase-return-list')} to="/purchase-return-list">Purchase Return List</Link></li>
                                <li><Link className={isActive('/add-purchase-return')} to="/add-purchase-return">Add Purchase Return</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/users1.svg" alt="img" /><span> People</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/customers')} to="/customers">Customer List</Link></li>
                                <li><Link className={isActive('/add-customer')} to="/add-customer">Add Customer</Link></li>
                                <li><Link className={isActive('/suppliers')} to="/suppliers">Supplier List</Link></li>
                                <li><Link className={isActive('/add-supplier')} to="/add-supplier">Add Supplier</Link></li>
                                <li><Link className={isActive('/users')} to="/users">User List</Link></li>
                                <li><Link className={isActive('/add-user')} to="/add-user">Add User</Link></li>
                                <li><Link className={isActive('/stores')} to="/stores">Store List</Link></li>
                                <li><Link className={isActive('/add-store')} to="/add-store">Add Store</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/places.svg" alt="img" /><span> Places</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/add-country')} to="/add-country">New Country</Link></li>
                                <li><Link className={isActive('/countries')} to="/countries">Countries list</Link></li>
                                <li><Link className={isActive('/add-state')} to="/add-state">New State</Link></li>
                                <li><Link className={isActive('/states')} to="/states">State list</Link></li>
                            </ul>
                        </li>
                        <li className={isActive('/components')}>
                            <Link to="/components"><i data-feather="layers"></i><span> Components</span> </Link>
                        </li>
                        <li className={isActive('/blank-page')}>
                            <Link to="/blank-page"><i data-feather="file"></i><span> Blank Page</span> </Link>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i data-feather="alert-octagon"></i> <span> Error Pages </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/error-404">404 Error</Link></li>
                                <li><Link to="/error-500">500 Error</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i data-feather="box"></i> <span>Elements </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/sweetalerts">Sweet Alerts</Link></li>
                                <li><Link to="/tooltip">Tooltip</Link></li>
                                <li><Link to="/popover">Popover</Link></li>
                                <li><Link to="/ribbon">Ribbon</Link></li>
                                <li><Link to="/clipboard">Clipboard</Link></li>
                                <li><Link to="/drag-drop">Drag & Drop</Link></li>
                                <li><Link to="/rangeslider">Range Slider</Link></li>
                                <li><Link to="/rating">Rating</Link></li>
                                <li><Link to="/toastr">Toastr</Link></li>
                                <li><Link to="/text-editor">Text Editor</Link></li>
                                <li><Link to="/counter">Counter</Link></li>
                                <li><Link to="/scrollbar">Scrollbar</Link></li>
                                <li><Link to="/spinner">Spinner</Link></li>
                                <li><Link to="/notification">Notification</Link></li>
                                <li><Link to="/lightbox">Lightbox</Link></li>
                                <li><Link to="/stickynote">Sticky Note</Link></li>
                                <li><Link to="/timeline">Timeline</Link></li>
                                <li><Link to="/form-wizard">Form Wizard</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i data-feather="bar-chart-2"></i> <span> Charts </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/chart-apex">Apex Charts</Link></li>
                                <li><Link to="/chart-js">Chart Js</Link></li>
                                <li><Link to="/chart-morris">Morris Charts</Link></li>
                                <li><Link to="/chart-flot">Flot Charts</Link></li>
                                <li><Link to="/chart-peity">Peity Charts</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i data-feather="award"></i><span> Icons </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/icon-fontawesome">Fontawesome Icons</Link></li>
                                <li><Link to="/icon-feather">Feather Icons</Link></li>
                                <li><Link to="/icon-ionic">Ionic Icons</Link></li>
                                <li><Link to="/icon-material">Material Icons</Link></li>
                                <li><Link to="/icon-pe7">Pe7 Icons</Link></li>
                                <li><Link to="/icon-simpleline">Simpleline Icons</Link></li>
                                <li><Link to="/icon-themify">Themify Icons</Link></li>
                                <li><Link to="/icon-weather">Weather Icons</Link></li>
                                <li><Link to="/icon-typicon">Typicon Icons</Link></li>
                                <li><Link to="/icon-flag">Flag Icons</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i data-feather="columns"></i> <span> Forms </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/form-basic-inputs">Basic Inputs</Link></li>
                                <li><Link to="/form-input-groups">Input Groups</Link></li>
                                <li><Link to="/form-horizontal">Horizontal Form</Link></li>
                                <li><Link to="/form-vertical">Vertical Form</Link></li>
                                <li><Link to="/form-mask">Form Mask</Link></li>
                                <li><Link to="/form-validation">Form Validation</Link></li>
                                <li><Link to="/form-select2">Form Select2</Link></li>
                                <li><Link to="/form-fileupload">File Upload</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i data-feather="layout"></i> <span> Table </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/tables-basic">Basic Tables</Link></li>
                                <li><Link to="/data-tables">Data Table</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/product.svg" alt="img" /><span> Application</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/chat">Chat</Link></li>
                                <li><Link to="/calendar">Calendar</Link></li>
                                <li><Link to="/email">Email</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/time.svg" alt="img" /><span> Report</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/report-purchase-order">Purchase order report</Link></li>
                                <li><Link to="/report-inventory">Inventory Report</Link></li>
                                <li><Link to="/report-sales">Sales Report</Link></li>
                                <li><Link to="/report-invoice">Invoice Report</Link></li>
                                <li><Link to="/report-purchase">Purchase Report</Link></li>
                                <li><Link to="/report-supplier">Supplier Report</Link></li>
                                <li><Link to="/report-customer">Customer Report</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/users1.svg" alt="img" /><span> Users</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/add-user-new">New User</Link></li>
                                <li><Link to="/users-list">Users List</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/settings.svg" alt="img" /><span> Settings</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/settings-general">General Settings</Link></li>
                                <li><Link to="/settings-email">Email Settings</Link></li>
                                <li><Link to="/settings-payment">Payment Settings</Link></li>
                                <li><Link to="/settings-currency">Currency Settings</Link></li>
                                <li><Link to="/settings-group-permissions">Group Permissions</Link></li>
                                <li><Link to="/settings-tax-rates">Tax Rates</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
