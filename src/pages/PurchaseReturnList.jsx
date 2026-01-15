import React from 'react';
import { Link } from 'react-router-dom';

const PurchaseReturnList = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Purchase Return List</h4>
                    <h6>Manage your Purchase Returns</h6>
                </div>
                <div className="page-btn">
                    <Link to="/add-purchase-return" className="btn btn-added">
                        <img src="/assets/img/icons/plus.svg" alt="img" className="me-1" />Add Purchase Return
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
                                    <th>Image</th>
                                    <th>Date</th>
                                    <th>Supplier</th>
                                    <th>Reference</th>
                                    <th>Status</th>
                                    <th>Grand Total</th>
                                    <th>Paid</th>
                                    <th>Due</th>
                                    <th>Payment Status</th>
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
                                            <img src="/assets/img/product/product1.jpg" alt="product" />
                                        </a>
                                    </td>
                                    <td>19 Nov 2022</td>
                                    <td>Thomas</td>
                                    <td>PR001</td>
                                    <td><span className="badges bg-lightgreen">Received</span></td>
                                    <td>1500.00</td>
                                    <td>1500.00</td>
                                    <td>0.00</td>
                                    <td><span className="badges bg-lightgreen">Paid</span></td>
                                    <td>
                                        <Link className="me-3" to="/edit-purchase-return">
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

export default PurchaseReturnList;
