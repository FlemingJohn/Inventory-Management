import React from 'react';
import { Link } from 'react-router-dom';

const SalesList = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Sales List</h4>
                    <h6>Manage your sales</h6>
                </div>
                <div className="page-btn">
                    <Link to="/add-sales" className="btn btn-added">
                        <img src="/assets/img/icons/plus.svg" alt="img" className="me-1" />Add Sales
                    </Link>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="table-top">
                        <div className="search-set">
                            <div className="search-path">
                                <a className="btn btn-filter" id="filter_search">
                                    <img src="/assets/img/icons/filter.svg" alt="img" />
                                    <span><img src="/assets/img/icons/closes.svg" alt="img" /></span>
                                </a>
                            </div>
                            <div className="search-input">
                                <a className="btn btn-searchset"><img src="/assets/img/icons/search-white.svg" alt="img" /></a>
                            </div>
                        </div>
                        <div className="wordset">
                            <ul>
                                <li>
                                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="/assets/img/icons/pdf.svg" alt="img" /></a>
                                </li>
                                <li>
                                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="/assets/img/icons/excel.svg" alt="img" /></a>
                                </li>
                                <li>
                                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="/assets/img/icons/printer.svg" alt="img" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card" id="filter_inputs">
                        <div className="card-body pb-0">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Name" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Reference No" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <select className="select">
                                            <option>Completed</option>
                                            <option>Paid</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <a className="btn btn-filters ms-auto"><img src="/assets/img/icons/search-whites.svg" alt="img" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table  datanew">
                            <thead>
                                <tr>
                                    <th>
                                        <label className="checkboxs">
                                            <input type="checkbox" id="select-all" />
                                            <span className="checkmarks"></span>
                                        </label>
                                    </th>
                                    <th>Date</th>
                                    <th>Customer Name</th>
                                    <th>Reference</th>
                                    <th>Status</th>
                                    <th>Payment</th>
                                    <th>Total</th>
                                    <th>Paid</th>
                                    <th>Due</th>
                                    <th>Biller</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label className="checkboxs">
                                            <input type="checkbox" />
                                            <span className="checkmarks"></span>
                                        </label>
                                    </td>
                                    <td>19 Nov 2022</td>
                                    <td>walk-in-customer</td>
                                    <td>SL0101</td>
                                    <td><span className="badges bg-lightgreen">Completed</span></td>
                                    <td><span className="badges bg-lightgreen">Paid</span></td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td className="text-red">100.00</td>
                                    <td>Admin</td>
                                    <td className="text-center">
                                        <a className="action-set" href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link to="/sales-details" className="dropdown-item"><img src="/assets/img/icons/eye1.svg" className="me-2" alt="img" />Sale Detail</Link>
                                            </li>
                                            <li>
                                                <Link to="/edit-sales" className="dropdown-item"><img src="/assets/img/icons/edit.svg" className="me-2" alt="img" />Edit Sale</Link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><img src="/assets/img/icons/dollar-square.svg" className="me-2" alt="img" />Show Payments</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><img src="/assets/img/icons/plus-circle.svg" className="me-2" alt="img" />Create Payment</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="dropdown-item"><img src="/assets/img/icons/download.svg" className="me-2" alt="img" />Download pdf</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="dropdown-item confirm-text"><img src="/assets/img/icons/delete1.svg" className="me-2" alt="img" />Delete Sale</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesList;
