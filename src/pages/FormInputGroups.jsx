import React from 'react';

const FormInputGroups = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Input Groups</h4>
                    <h6>Manage your input groups</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2">@example.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormInputGroups;
