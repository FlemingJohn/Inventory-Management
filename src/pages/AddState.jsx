import React from 'react';
import { Link } from 'react-router-dom';

const AddState = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Places Management</h4>
                    <h6>Add/Update Places</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>State Name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Country Name</label>
                                <select className="select">
                                    <option>Choose Country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <a href="javascript:void(0);" className="btn btn-submit me-2">Submit</a>
                            <Link to="/states" className="btn btn-cancel">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddState;
