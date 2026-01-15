import React from 'react';

const Components = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Components</h4>
                    <h6>UI Kit Components</h6>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Buttons</h5>
                        </div>
                        <div className="card-body">
                            <button type="button" className="btn btn-primary me-2">Primary</button>
                            <button type="button" className="btn btn-secondary me-2">Secondary</button>
                            <button type="button" className="btn btn-success me-2">Success</button>
                            <button type="button" className="btn btn-danger me-2">Danger</button>
                            <button type="button" className="btn btn-warning me-2">Warning</button>
                            <button type="button" className="btn btn-info me-2">Info</button>
                            <button type="button" className="btn btn-light me-2">Light</button>
                            <button type="button" className="btn btn-dark me-2">Dark</button>
                            <button type="button" className="btn btn-link me-2">Link</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Cards</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="/assets/img/product/product1.jpg" alt="img" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Additional UI kit sections like Forms, Tables, etc. from components.html could be added here */}
        </div>
    );
};

export default Components;
