import React from 'react';
import { Link } from 'react-router-dom';

const EditSupplier = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Supplier Management</h4>
                    <h6>Edit/Update Supplier</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Supplier Name</label>
                                <input type="text" defaultValue="Apex Computers" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" defaultValue="apex@example.com" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" defaultValue="+12163547758" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Choose Country</label>
                                <select className="select">
                                    <option>USA</option>
                                    <option>India</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>City</label>
                                <select className="select">
                                    <option>New York</option>
                                    <option>City 1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-9 col-12">
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" defaultValue="USA" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label> Avatar</label>
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
                            <a href="javascript:void(0);" className="btn btn-submit me-2">Update</a>
                            <Link to="/suppliers" className="btn btn-cancel">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditSupplier;
