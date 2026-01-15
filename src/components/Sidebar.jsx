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
                                <li><Link className={isActive('/sales-return')} to="/sales-return">Sales Return List</Link></li>
                                <li><Link className={isActive('/add-sales-return')} to="/add-sales-return">Add Sales Return</Link></li>
                                <li><Link className={isActive('/purchase-return')} to="/purchase-return">Purchase Return List</Link></li>
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
                                <li><Link className={isActive('/error-404')} to="/error-404">404 Error</Link></li>
                                <li><Link className={isActive('/error-500')} to="/error-500">500 Error</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i data-feather="box"></i> <span>Elements </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/sweetalerts')} to="/sweetalerts">Sweet Alerts</Link></li>
                                <li><Link className={isActive('/tooltip')} to="/tooltip">Tooltip</Link></li>
                                <li><Link className={isActive('/popover')} to="/popover">Popover</Link></li>
                                <li><Link className={isActive('/ribbon')} to="/ribbon">Ribbon</Link></li>
                                <li><Link className={isActive('/clipboard')} to="/clipboard">Clipboard</Link></li>
                                <li><Link className={isActive('/drag-drop')} to="/drag-drop">Drag & Drop</Link></li>
                                <li><Link className={isActive('/rangeslider')} to="/rangeslider">Range Slider</Link></li>
                                <li><Link className={isActive('/rating')} to="/rating">Rating</Link></li>
                                <li><Link className={isActive('/toastr')} to="/toastr">Toastr</Link></li>
                                <li><Link className={isActive('/text-editor')} to="/text-editor">Text Editor</Link></li>
                                <li><Link className={isActive('/counter')} to="/counter">Counter</Link></li>
                                <li><Link className={isActive('/scrollbar')} to="/scrollbar">Scrollbar</Link></li>
                                <li><Link className={isActive('/spinner')} to="/spinner">Spinner</Link></li>
                                <li><Link className={isActive('/notification')} to="/notification">Notification</Link></li>
                                <li><Link className={isActive('/lightbox')} to="/lightbox">Lightbox</Link></li>
                                <li><Link className={isActive('/stickynote')} to="/stickynote">Sticky Note</Link></li>
                                <li><Link className={isActive('/timeline')} to="/timeline">Timeline</Link></li>
                                <li><Link className={isActive('/form-wizard')} to="/form-wizard">Form Wizard</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i data-feather="bar-chart-2"></i> <span> Charts </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/chart-apex')} to="/chart-apex">Apex Charts</Link></li>
                                <li><Link className={isActive('/chart-js')} to="/chart-js">Chart Js</Link></li>
                                <li><Link className={isActive('/chart-morris')} to="/chart-morris">Morris Charts</Link></li>
                                <li><Link className={isActive('/chart-flot')} to="/chart-flot">Flot Charts</Link></li>
                                <li><Link className={isActive('/chart-peity')} to="/chart-peity">Peity Charts</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i data-feather="award"></i><span> Icons </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/icon-fontawesome')} to="/icon-fontawesome">Fontawesome Icons</Link></li>
                                <li><Link className={isActive('/icon-feather')} to="/icon-feather">Feather Icons</Link></li>
                                <li><Link className={isActive('/icon-ionic')} to="/icon-ionic">Ionic Icons</Link></li>
                                <li><Link className={isActive('/icon-material')} to="/icon-material">Material Icons</Link></li>
                                <li><Link className={isActive('/icon-pe7')} to="/icon-pe7">Pe7 Icons</Link></li>
                                <li><Link className={isActive('/icon-simpleline')} to="/icon-simpleline">Simpleline Icons</Link></li>
                                <li><Link className={isActive('/icon-themify')} to="/icon-themify">Themify Icons</Link></li>
                                <li><Link className={isActive('/icon-weather')} to="/icon-weather">Weather Icons</Link></li>
                                <li><Link className={isActive('/icon-typicon')} to="/icon-typicon">Typicon Icons</Link></li>
                                <li><Link className={isActive('/icon-flag')} to="/icon-flag">Flag Icons</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i data-feather="columns"></i> <span> Forms </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/form-basic-inputs')} to="/form-basic-inputs">Basic Inputs</Link></li>
                                <li><Link className={isActive('/form-input-groups')} to="/form-input-groups">Input Groups</Link></li>
                                <li><Link className={isActive('/form-horizontal')} to="/form-horizontal">Horizontal Form</Link></li>
                                <li><Link className={isActive('/form-vertical')} to="/form-vertical">Vertical Form</Link></li>
                                <li><Link className={isActive('/form-mask')} to="/form-mask">Form Mask</Link></li>
                                <li><Link className={isActive('/form-validation')} to="/form-validation">Form Validation</Link></li>
                                <li><Link className={isActive('/form-select2')} to="/form-select2">Form Select2</Link></li>
                                <li><Link className={isActive('/form-fileupload')} to="/form-fileupload">File Upload</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i data-feather="layout"></i> <span> Table </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/tables-basic')} to="/tables-basic">Basic Tables</Link></li>
                                <li><Link className={isActive('/data-tables')} to="/data-tables">Data Table</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/product.svg" alt="img" /><span> Application</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/chat')} to="/chat">Chat</Link></li>
                                <li><Link className={isActive('/calendar')} to="/calendar">Calendar</Link></li>
                                <li><Link className={isActive('/email')} to="/email">Email</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/time.svg" alt="img" /><span> Report</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/purchase-order-report')} to="/purchase-order-report">Purchase order report</Link></li>
                                <li><Link className={isActive('/inventory-report')} to="/inventory-report">Inventory Report</Link></li>
                                <li><Link className={isActive('/sales-report')} to="/sales-report">Sales Report</Link></li>
                                <li><Link className={isActive('/invoice-report')} to="/invoice-report">Invoice Report</Link></li>
                                <li><Link className={isActive('/purchase-report')} to="/purchase-report">Purchase Report</Link></li>
                                <li><Link className={isActive('/supplier-report')} to="/supplier-report">Supplier Report</Link></li>
                                <li><Link className={isActive('/customer-report')} to="/customer-report">Customer Report</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/users1.svg" alt="img" /><span> Users</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/add-user')} to="/add-user">New User</Link></li>
                                <li><Link className={isActive('/users')} to="/users">Users List</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><img src="/assets/img/icons/settings.svg" alt="img" /><span> Settings</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link className={isActive('/general-settings')} to="/general-settings">General Settings</Link></li>
                                <li><Link className={isActive('/email-settings')} to="/email-settings">Email Settings</Link></li>
                                <li><Link className={isActive('/payment-settings')} to="/payment-settings">Payment Settings</Link></li>
                                <li><Link className={isActive('/currency-settings')} to="/currency-settings">Currency Settings</Link></li>
                                <li><Link className={isActive('/permissions')} to="/permissions">Group Permissions</Link></li>
                                <li><Link className={isActive('/tax-rates')} to="/tax-rates">Tax Rates</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
