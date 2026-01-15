import React from 'react';

const FormSelect2 = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Form Select2</h4>
                    <h6>Manage your form select2</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Basic Select</label>
                                <select className="select">
                                    <option>Selection 1</option>
                                    <option>Selection 2</option>
                                    <option>Selection 3</option>
                                    <option>Selection 4</option>
                                    <option>Selection 5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSelect2;
