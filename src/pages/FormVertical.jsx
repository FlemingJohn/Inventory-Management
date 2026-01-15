import React from 'react';

const FormVertical = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Vertical Form</h4>
                    <h6>Manage your vertical form</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <form action="#">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-control" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormVertical;
