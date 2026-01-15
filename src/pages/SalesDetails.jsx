import React from 'react';

const SalesDetails = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Sale Details</h4>
                    <h6>Full details of a sale</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="card-sales-split">
                        <h2>Sale Detail : SL0101</h2>
                        <ul>
                            <li>
                                <a href="javascript:void(0);"><img src="/assets/img/icons/edit.svg" alt="img" /></a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><img src="/assets/img/icons/pdf.svg" alt="img" /></a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><img src="/assets/img/icons/printer.svg" alt="img" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="productdetails">
                                        <ul className="product-bar">
                                            <li>
                                                <h4>Customer Name</h4>
                                                <h6>walk-in-customer</h6>
                                            </li>
                                            <li>
                                                <h4>Reference</h4>
                                                <h6>SL0101</h6>
                                            </li>
                                            <li>
                                                <h4>Status</h4>
                                                <h6>Completed</h6>
                                            </li>
                                            <li>
                                                <h4>Payment Status</h4>
                                                <h6>Paid</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="productdetails">
                                        <ul className="product-bar">
                                            <li>
                                                <h4>Warehouse</h4>
                                                <h6>Warehouse 1</h6>
                                            </li>
                                            <li>
                                                <h4>Date</h4>
                                                <h6>19 Nov 2022</h6>
                                            </li>
                                            <li>
                                                <h4>Biller</h4>
                                                <h6>Admin</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>QTY</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Tax </th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Apple Earpods </td>
                                            <td>1.00</td>
                                            <td>1500.00</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>1500.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 float-md-right">
                                    <div className="total-order">
                                        <ul>
                                            <li>
                                                <h4>Order Tax</h4>
                                                <h5>$ 0.00 (0.00%)</h5>
                                            </li>
                                            <li>
                                                <h4>Discount </h4>
                                                <h5>$ 0.00</h5>
                                            </li>
                                            <li>
                                                <h4>Shipping</h4>
                                                <h5>$ 0.00</h5>
                                            </li>
                                            <li className="total">
                                                <h4>Grand Total</h4>
                                                <h5>$ 1500.00</h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="productdetails">
                                <ul className="product-bar">
                                    <li>
                                        <h4>Description</h4>
                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesDetails;
