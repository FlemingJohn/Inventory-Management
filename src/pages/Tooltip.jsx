import React from 'react';

const Tooltip = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Tooltip</h4>
                    <h6>Manage your tooltip</h6>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <button type="button" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                        Tooltip on top
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
