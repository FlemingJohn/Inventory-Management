import React from 'react';
import { Link } from 'react-router-dom';

const EditExpense = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Expense Management</h4>
                    <h6>Edit/Update Expense</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Expense Category</label>
                                <select className="select">
                                    <option>Food & Grocery</option>
                                    <option>Utility</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Expense Date </label>
                                <div className="input-groupicon">
                                    <input type="text" placeholder="19 Nov 2022" className="datetimepicker" />
                                    <div className="addonset">
                                        <img src="/assets/img/icons/calendars.svg" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Amount</label>
                                <input type="text" defaultValue="150.00" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Reference No.</label>
                                <input type="text" defaultValue="EXP001" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Expense for</label>
                                <input type="text" defaultValue="Office snacks" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control">Office snacks for the team</textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <a href="javascript:void(0);" className="btn btn-submit me-2">Update</a>
                            <Link to="/expenses" className="btn btn-cancel">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditExpense;
