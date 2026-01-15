import React from 'react';

const Email = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Email</h4>
                    <h6>Manage your Emails</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="inbox-menu">
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#"><i className="fa fa-inbox"></i> Inbox <span className="badge badge-primary float-end">5</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-paper-plane"></i> Sent</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-file"></i> Drafts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-trash"></i> Trash</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="email-header">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4 className="card-title">Inbox</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="email-content">
                                <div className="table-responsive">
                                    <table className="table table-inbox table-hover">
                                        <thead>
                                            <tr>
                                                <th colSpan="3">
                                                    <input type="checkbox" className="me-2" /> Select All
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="unread clickable-row">
                                                <td><input type="checkbox" /></td>
                                                <td>John Doe</td>
                                                <td>New product inquiry...</td>
                                                <td className="text-end">10:45 AM</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td>Support</td>
                                                <td>Your ticket has been resolved...</td>
                                                <td className="text-end">Yesterday</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Email;
