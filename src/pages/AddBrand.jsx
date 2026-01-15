import React from 'react';
import { Link } from 'react-router-dom';

const AddBrand = () => {
    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div className="page-title">
                        <h4>Brand Add</h4>
                        <h6>Create new Brand</h6>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Brand Name</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label> Product Image</label>
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
                                <button className="btn btn-submit me-2">Submit</button>
                                <Link to="/brands" className="btn btn-cancel">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBrand;
