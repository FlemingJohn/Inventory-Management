import React from 'react';

const FormValidation = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Form Validation</h4>
                    <h6>Manage your form validation</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <form className="needs-validation" noValidate>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationCustom01">First name</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="First name" defaultValue="Mark" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationCustom02">Last name</label>
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" defaultValue="Otto" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormValidation;
