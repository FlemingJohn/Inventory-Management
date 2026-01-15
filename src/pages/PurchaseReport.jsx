import React from 'react';

const PurchaseReport = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Purchase Report</h4>
                    <h6>Manage your Purchase Report</h6>
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
                                        <div className="input-groupicon">
                                            <input type="text" placeholder="From Date" className="datetimepicker" />
                                            <div className="addonset">
                                                <img src="/assets/img/icons/calendars.svg" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 col-12">
                                    <div className="form-group">
                                        <div className="input-groupicon">
                                            <input type="text" placeholder="To Date" className="datetimepicker" />
                                            <div className="addonset">
                                                <img src="/assets/img/icons/calendars.svg" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 col-12">
                                    <div className="form-group">
                                        <select className="select">
                                            <option>Choose Supplier</option>
                                            <option>Supplier 1</option>
                                        </select>
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
                                    <th>Product Name</th>
                                    <th>Purchased Amount</th>
                                    <th>Purchased QTY</th>
                                    <th>Instock QTY</th>
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
                                        <a className="product-img">
                                            <img src="/assets/img/product/product1.jpg" alt="product" />
                                        </a>
                                        <a href="javascript:void(0);">Macbook pro</a>
                                    </td>
                                    <td>38698.00</td>
                                    <td>1248</td>
                                    <td>1356</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseReport;
