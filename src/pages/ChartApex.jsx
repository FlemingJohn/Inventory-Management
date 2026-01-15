import React from 'react';

const ChartApex = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Apex Charts</h4>
                    <h6>Manage your apex charts</h6>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Basic Column Chart</h5>
                        </div>
                        <div className="card-body">
                            <div id="s-col" style={{ height: '300px', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                Apex Chart Placeholder
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Basic Line Chart</h5>
                        </div>
                        <div className="card-body">
                            <div id="s-line" style={{ height: '300px', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                Apex Chart Placeholder
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartApex;
