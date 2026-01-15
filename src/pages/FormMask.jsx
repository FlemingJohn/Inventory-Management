import React from 'react';

const FormMask = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Form Mask</h4>
                    <h6>Manage your form mask</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" id="phone" />
                                <span className="form-text text-muted">(999) 999-9999</span>
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="text" className="form-control" id="date" />
                                <span className="form-text text-muted">dd/mm/yyyy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormMask;
