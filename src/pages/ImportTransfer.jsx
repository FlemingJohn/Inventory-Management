import React from 'react';
import { Link } from 'react-router-dom';

const ImportTransfer = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Import Transfer</h4>
                    <h6>Manage your Import Transfer</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Store</label>
                                <select className="select">
                                    <option>Choose Store</option>
                                    <option>Store A</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label> Upload CSV File</label>
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
                            <div className="form-group mb-0">
                                <a href="javascript:void(0);" className="btn btn-submit me-2">Submit</a>
                                <Link to="/transfers" className="btn btn-cancel">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImportTransfer;
