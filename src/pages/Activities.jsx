import React from 'react';

const Activities = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Activities</h4>
                    <h6>Manage your Activities</h6>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="activity">
                        <div className="activity-box">
                            <ul className="activity-list">
                                <li>
                                    <div className="activity-user">
                                        <a href="javascript:void(0);" title="John Doe" data-bs-toggle="tooltip" className="avatar">
                                            <img src="/assets/img/customer/customer1.jpg" alt="img" />
                                        </a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="javascript:void(0);" className="name">John Doe</a> added a new product <a href="javascript:void(0);">Macbook pro</a>
                                            <span className="time">Just now</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="activity-user">
                                        <a href="javascript:void(0);" title="John Doe" data-bs-toggle="tooltip" className="avatar">
                                            <img src="/assets/img/customer/customer2.jpg" alt="img" />
                                        </a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="javascript:void(0);" className="name">John Doe</a> added a new customer <a href="javascript:void(0);">Thomas</a>
                                            <span className="time">4 mins ago</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;
