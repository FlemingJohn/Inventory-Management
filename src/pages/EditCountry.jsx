import React from 'react';
import { Link } from 'react-router-dom';

const EditCountry = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Places Management</h4>
                    <h6>Edit/Update Places</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Country Name</label>
                                <input type="text" defaultValue="China" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label>Region</label>
                                <input type="text" defaultValue="Beijing" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <a href="javascript:void(0);" className="btn btn-submit me-2">Update</a>
                            <Link to="/countries" className="btn btn-cancel">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCountry;
