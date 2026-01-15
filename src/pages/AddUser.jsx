import React from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>User Management</h4>
                    <h6>Add/Update User</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Role</label>
                                <select className="select">
                                    <option>Select</option>
                                    <option>Admin</option>
                                    <option>User</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Password</label>
                                <div className="pass-group">
                                    <input type="password" sx={{ pr: 7 }} className="pass-input" />
                                    <span className="fas toggle-password fa-eye-slash"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <div className="pass-group">
                                    <input type="password" sx={{ pr: 7 }} className="pass-inputs" />
                                    <span className="fas toggle-passwords fa-eye-slash"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label> User Image</label>
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
                            <Link to="/users" className="btn btn-cancel">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
