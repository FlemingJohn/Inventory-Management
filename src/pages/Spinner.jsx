import React from 'react';

const Spinner = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Spinner</h4>
                    <h6>Manage your spinner</h6>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
