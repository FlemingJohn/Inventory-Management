import React from 'react';

const EmailSettings = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Email Settings</h4>
                    <h6>Manage Email Settings</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <label>Mail Host <span className="text-danger">*</span></label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <label>Mail Port <span className="text-danger">*</span></label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <label>Mail Address <span className="text-danger">*</span></label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <label>Password <span className="text-danger">*</span></label>
                                <div className="pass-group">
                                    <input type="password" />
                                    <span className="fas toggle-password fa-eye-slash"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <label>Mail From Name <span className="text-danger">*</span></label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <label>Encryption <span className="text-danger">*</span></label>
                                <select className="select">
                                    <option>Choose Encryption</option>
                                    <option>TLS</option>
                                    <option>SSL</option>
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

export default EmailSettings;
