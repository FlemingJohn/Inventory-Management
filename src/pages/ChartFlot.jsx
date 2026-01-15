import React from 'react';

const ChartFlot = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Flot Charts</h4>
                    <h6>Manage your flot charts</h6>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Bar Chart</h5>
                        </div>
                        <div className="card-body">
                            <div style={{ height: '300px', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                Flot Chart Placeholder
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartFlot;
