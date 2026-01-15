import React from 'react';

const FormFileupload = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>File Upload</h4>
                    <h6>Manage your file upload</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>File Upload</label>
                                <input className="form-control" type="file" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormFileupload;
