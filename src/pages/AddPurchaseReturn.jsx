import React from 'react';
import { Link } from 'react-router-dom';

const AddPurchaseReturn = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Create Purchase Return</h4>
                    <h6>Add/Update Purchase Return</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Supplier Name</label>
                                <select className="select">
                                    <option>Choose Supplier</option>
                                    <option>Supplier 1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Purchase Return Date </label>
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
                                <label>Reference No.</label>
                                <input type="text" />
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
                                            <th>Net Unit Price($) </th>
                                            <th>Stock</th>
                                            <th>Qty</th>
                                            <th>Discount($)</th>
                                            <th>Tax %</th>
                                            <th>Subtotal ($)</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Macbook pro</td>
                                            <td>1500.00</td>
                                            <td>10.00</td>
                                            <td>1.00</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
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
                            <Link to="/purchase-return" className="btn btn-cancel">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPurchaseReturn;
