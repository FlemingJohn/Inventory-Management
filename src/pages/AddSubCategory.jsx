import React from 'react';
import { Link } from 'react-router-dom';

const AddSubCategory = () => {
    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div className="page-title">
                        <h4>Product Add sub Category</h4>
                        <h6>Create new product Category</h6>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Parent Category</label>
                                    <select className="select">
                                        <option>Choose Category</option>
                                        <option>Category</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Category Name</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Category Code</label>
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
                                <button className="btn btn-submit me-2">Submit</button>
                                <Link to="/sub-categories" className="btn btn-cancel">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSubCategory;
