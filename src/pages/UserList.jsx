import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>User List</h4>
                    <h6>Manage your User</h6>
                </div>
                <div className="page-btn">
                    <Link to="/add-user" className="btn btn-added">
                        <img src="/assets/img/icons/plus.svg" alt="img" className="me-1" />Add User
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
                                <div className="col-lg-2 col-sm-6 col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter User Name" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Phone" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Email" />
                                    </div>
                                </div>
                                <div className="col-lg-1 col-sm-6 col-12 ms-auto">
                                    <div className="form-group">
                                        <a className="btn btn-filters ms-auto"><img src="/assets/img/icons/search-whites.svg" alt="img" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table datanew">
                            <thead>
                                <tr>
                                    <th>
                                        <label className="checkboxs">
                                            <input type="checkbox" id="select-all" />
                                            <span className="checkmarks"></span>
                                        </label>
                                    </th>
                                    <th>User Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Created On</th>
                                    <th>Status</th>
                                    <th>Action</th>
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
                                    <td className="productimgname">
                                        <a href="javascript:void(0);" className="product-img">
                                            <img src="/assets/img/customer/customer1.jpg" alt="product" />
                                        </a>
                                        <a href="javascript:void(0);">Thomas</a>
                                    </td>
                                    <td>+12163547758 </td>
                                    <td>thomas@example.com</td>
                                    <td>Admin</td>
                                    <td>19 Nov 2022</td>
                                    <td><span className="badges bg-lightgreen">Active</span></td>
                                    <td>
                                        <Link className="me-3" to="/edit-user">
                                            <img src="/assets/img/icons/edit.svg" alt="img" />
                                        </Link>
                                        <a className="confirm-text" href="javascript:void(0);">
                                            <img src="/assets/img/icons/delete.svg" alt="img" />
                                        </a>
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

export default UserList;
