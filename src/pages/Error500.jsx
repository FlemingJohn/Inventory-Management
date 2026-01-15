import React from 'react';
import { Link } from 'react-router-dom';

const Error500 = () => {
    return (
        <div className="main-wrapper">
            <div className="error-box">
                <h1>500</h1>
                <h3 className="h2 mb-3"><i className="fas fa-exclamation-triangle"></i> Internal Server Error</h3>
                <p className="h4 font-weight-normal">The server encountered an internal error and was unable to complete your request.</p>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        </div>
    );
};

export default Error500;
