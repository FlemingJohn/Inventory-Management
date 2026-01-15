import React from 'react';

const RangeSlider = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Range Slider</h4>
                    <h6>Manage your range slider</h6>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <input type="range" className="form-range" id="customRange1" />
                </div>
            </div>
        </div>
    );
};

export default RangeSlider;
