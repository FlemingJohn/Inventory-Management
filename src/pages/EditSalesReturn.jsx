import React from 'react';
import { Link } from 'react-router-dom';

const EditSalesReturn = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Edit Sales Return</h4>
                    <h6>Add/Update Sales Return</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Customer Name</label>
                                <div className="row">
                                    <div className="col-lg-10 col-sm-10 col-10">
                                        <select className="select">
                                            <option>Thomas</option>
                                            <option>Customer name</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-2 col-sm-2 col-2 ps-0">
                                        <div className="add-icon">
                                            <Link to="/add-customer"><img src="/assets/img/icons/plus1.svg" alt="img" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Quotation Date</label>
                                <div className="input-groupicon">
                                    <input type="text" defaultValue="19-11-2022" className="datetimepicker" />
                                    <div className="addonset">
                                        <img src="/assets/img/icons/calendars.svg" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Reference No.</label>
                                <input type="text" defaultValue="TR0101" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Product Name</label>
                                <div className="input-groupicon">
                                    <input type="text" placeholder="Scan/Search Product by code and select..." />
                                    <div className="addonset">
                                        <img src="/assets/img/icons/scanners.svg" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Net Unit Price($) </th>
                                        <th>QTY</th>
                                        <th>Discount($)</th>
                                        <th>Tax (%) </th>
                                        <th>Subtotal ($)</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Apple Earpods </td>
                                        <td>10.00</td>
                                        <td>1.00</td>
                                        <td>0.00</td>
                                        <td>0.00</td>
                                        <td>100.00</td>
                                        <td>
                                            <a className="delete-set"><img src="/assets/img/icons/delete.svg" alt="img" /></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                                        <h5>$ 100.00</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Order Tax</label>
                                <input type="text" defaultValue="0" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Discount</label>
                                <input type="text" defaultValue="0" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Shipping</label>
                                <input type="text" defaultValue="0" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Status</label>
                                <select className="select">
                                    <option>Completed</option>
                                    <option>Inprogress</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <a href="javascript:void(0);" className="btn btn-submit me-2">Update</a>
                            <Link to="/sales-return" className="btn btn-cancel">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditSalesReturn;
