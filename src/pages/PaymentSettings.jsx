import React from 'react';

const PaymentSettings = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Payment Settings</h4>
                    <h6>Manage Payment Settings</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Payment Method Name <span className="text-danger">*</span></label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Status</label>
                                <select className="select">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <a href="javascript:void(0);" className="btn btn-submit me-2">Submit</a>
                            <a href="javascript:void(0);" className="btn btn-cancel">Cancel</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSettings;
