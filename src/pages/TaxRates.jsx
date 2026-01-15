import React from 'react';

const TaxRates = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Tax Rates</h4>
                    <h6>Manage Tax Rates</h6>
                </div>
                <div className="page-btn">
                    <a className="btn btn-added" data-bs-toggle="modal" data-bs-target="#addtax">
                        <img src="/assets/img/icons/plus.svg" alt="img" className="me-1" />Add Tax Rate
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table datanew">
                            <thead>
                                <tr>
                                    <th>Tax Name</th>
                                    <th>Tax Percentage (%)</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>GST</td>
                                    <td>18.00</td>
                                    <td><span className="badges bg-lightgreen">Active</span></td>
                                    <td>
                                        <a className="me-3" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edittax">
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

            {/* Modals could be implemented here as react components or handled via data-bs-toggle */}
        </div>
    );
};

export default TaxRates;
