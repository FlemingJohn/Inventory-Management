import React from 'react';

const GeneralSettings = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>General Settings</h4>
                    <h6>Manage General Settings</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Title <span className="text-danger">*</span></label>
                                <input type="text" defaultValue="DreamsPOS" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Time Zone </label>
                                <select className="select">
                                    <option>Choose Time Zone</option>
                                    <option>UTC +5:30</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Currency <span className="text-danger">*</span></label>
                                <select className="select">
                                    <option>Choose Currency</option>
                                    <option>USD</option>
                                    <option>INR</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Date Format <span className="text-danger">*</span></label>
                                <select className="select">
                                    <option>Choose Date Format</option>
                                    <option>DD-MM-YYYY</option>
                                    <option>MM-DD-YYYY</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Email <span className="text-danger">*</span></label>
                                <input type="text" defaultValue="admin@example.com" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Phone <span className="text-danger">*</span></label>
                                <input type="text" defaultValue="1234567890" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Address <span className="text-danger">*</span></label>
                                <textarea className="form-control">123, Street Name, City, Country</textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label> Product Logo</label>
                                <div className="image-upload">
                                    <input type="file" />
                                    <div className="image-uploads">
                                        <img src="/assets/img/icons/upload.svg" alt="img" />
                                        <h4>Drag and drop a file to upload</h4>
                                    </div>
                                </div>
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

export default GeneralSettings;
