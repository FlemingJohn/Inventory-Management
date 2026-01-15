import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Product List</h4>
                    <h6>Manage your products</h6>
                </div>
                <div className="page-btn">
                    <Link to="/add-product" className="btn btn-added">
                        <img src="/assets/img/icons/plus.svg" alt="img" className="me-1" />
                        Add New Product
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
                                <li><a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="/assets/img/icons/pdf.svg" alt="img" /></a></li>
                                <li><a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="/assets/img/icons/excel.svg" alt="img" /></a></li>
                                <li><a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="/assets/img/icons/printer.svg" alt="img" /></a></li>
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
                                    <th>Product Name</th>
                                    <th>SKU</th>
                                    <th>Category </th>
                                    <th>Brand</th>
                                    <th>price</th>
                                    <th>Unit</th>
                                    <th>Qty</th>
                                    <th>Created By</th>
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
                                        <a href="javascript:void(0);">Macbook pro</a>
                                    </td>
                                    <td>PT001</td>
                                    <td>Computers</td>
                                    <td>N/D</td>
                                    <td>1500.00</td>
                                    <td>pc</td>
                                    <td>100.00</td>
                                    <td>Admin</td>
                                    <td>
                                        <a className="me-3" href="javascript:void(0);">
                                            <img src="/assets/img/icons/eye.svg" alt="img" />
                                        </a>
                                        <a className="me-3" href="javascript:void(0);">
                                            <img src="/assets/img/icons/edit.svg" alt="img" />
                                        </a>
                                        <a className="confirm-text" href="javascript:void(0);">
                                            <img src="/assets/img/icons/delete.svg" alt="img" />
                                        </a>
                                    </td>
                                </tr>
                                {/* More rows can be added here */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
