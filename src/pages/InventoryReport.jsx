import React from 'react';

const InventoryReport = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Inventory Report</h4>
                    <h6>Manage your Inventory Report</h6>
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
                                        <select className="select">
                                            <option>Choose Product</option>
                                            <option>Macbook pro</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 col-12">
                                    <div className="form-group">
                                        <select className="select">
                                            <option>Choose Category</option>
                                            <option>Computers</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 col-12">
                                    <div className="form-group">
                                        <select className="select">
                                            <option>Choose Warehouse</option>
                                            <option>Warehouse 1</option>
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
                                    <th>SKU</th>
                                    <th>Category</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                    <th>Unit</th>
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
                                    <td>PT001</td>
                                    <td>Computers</td>
                                    <td>Apple</td>
                                    <td>1500.00</td>
                                    <td>pc</td>
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

export default InventoryReport;
