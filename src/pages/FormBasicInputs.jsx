import React from 'react';

const FormBasicInputs = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Basic Inputs</h4>
                    <h6>Manage your basic inputs</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Text Input</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Disabled Input</label>
                                <input type="text" className="form-control" disabled value="Disabled" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormBasicInputs;
