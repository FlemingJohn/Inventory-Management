import React from 'react';

const Popover = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Popover</h4>
                    <h6>Manage your popover</h6>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <button type="button" className="btn btn-danger" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top Popover content">
                        Popover on top
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popover;
