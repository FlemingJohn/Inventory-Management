import React from 'react';

const Clipboard = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Clipboard</h4>
                    <h6>Manage your clipboard</h6>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <input type="text" className="form-control" defaultValue="Copy this text" />
                    <button className="btn btn-primary mt-2">Copy to clipboard</button>
                </div>
            </div>
        </div>
    );
};

export default Clipboard;
