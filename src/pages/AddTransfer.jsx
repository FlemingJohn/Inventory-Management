import React from 'react';
import { Link } from 'react-router-dom';

const AddTransfer = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Transfer Management</h4>
                    <h6>Add/Update Transfer</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Transfer Date </label>
                                <div className="input-groupicon">
                                    <input type="text" placeholder="Choose Date" className="datetimepicker" />
                                    <div className="addonset">
                                        <img src="/assets/img/icons/calendars.svg" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>From Store</label>
                                <select className="select">
                                    <option>Choose Store</option>
                                    <option>Store A</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>To Store</label>
                                <select className="select">
                                    <option>Choose Store</option>
                                    <option>Store B</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Product Name</label>
                                <div className="input-groupicon">
                                    <input type="text" placeholder="Please type product code and select..." />
                                    <div className="addonset">
                                        <img src="/assets/img/icons/scanners.svg" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>QTY</th>
                                            <th>Price</th>
                                            <th>Stock</th>
                                            <th>Subtotal</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Macbook pro</td>
                                            <td>1.00</td>
                                            <td>1500.00</td>
                                            <td>10.00</td>
                                            <td>1500.00</td>
                                            <td>
                                                <a href="javascript:void(0);"><img src="/assets/img/icons/delete.svg" alt="img" /></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <a href="javascript:void(0);" className="btn btn-submit me-2">Submit</a>
                            <Link to="/transfers" className="btn btn-cancel">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTransfer;
