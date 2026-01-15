import React from 'react';

const FormHorizontal = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Horizontal Form</h4>
                    <h6>Manage your horizontal form</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <form action="#">
                        <div className="form-group row">
                            <label className="col-form-label col-md-2">First Name</label>
                            <div className="col-md-10">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-md-2">Last Name</label>
                            <div className="col-md-10">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-md-2">Email Address</label>
                            <div className="col-md-10">
                                <input type="email" className="form-control" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormHorizontal;
