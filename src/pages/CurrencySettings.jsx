import React from 'react';

const CurrencySettings = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Currency Settings</h4>
                    <h6>Manage Currency Settings</h6>
                </div>
                <div className="page-btn">
                    <a className="btn btn-added" data-bs-toggle="modal" data-bs-target="#addcurrency">
                        <img src="/assets/img/icons/plus.svg" alt="img" className="me-1" />Add Currency
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table datanew">
                            <thead>
                                <tr>
                                    <th>Currency Name</th>
                                    <th>Currency Code</th>
                                    <th>Currency Symbol</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>US Dollar</td>
                                    <td>USD</td>
                                    <td>$</td>
                                    <td><span className="badges bg-lightgreen">Active</span></td>
                                    <td>
                                        <a className="me-3" href="javascript:void(0);">
                                            <img src="/assets/img/icons/edit.svg" alt="img" />
                                        </a>
                                        <a className="confirm-text" href="javascript:void(0);">
                                            <img src="/assets/img/icons/delete.svg" alt="img" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrencySettings;
