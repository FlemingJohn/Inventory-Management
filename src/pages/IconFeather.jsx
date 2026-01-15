import React from 'react';

const IconFeather = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Feather Icons</h4>
                    <h6>Manage your feather icons</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <p>Feather Icons reference page.</p>
                            <i data-feather="home"></i> home
                            <br />
                            <i data-feather="user"></i> user
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconFeather;
