import React from 'react';

const GroupPermissions = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Group Permissions</h4>
                    <h6>Manage Group Permissions</h6>
                </div>
                <div className="page-btn">
                    <a className="btn btn-added" href="/create-permission">
                        <img src="/assets/img/icons/plus.svg" alt="img" className="me-1" />Add Permission
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table datanew">
                            <thead>
                                <tr>
                                    <th>Role</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Admin</td>
                                    <td>Administrator with full access</td>
                                    <td><span className="badges bg-lightgreen">Active</span></td>
                                    <td>
                                        <a className="me-3" href="/edit-permission">
                                            <img src="/assets/img/icons/edit.svg" alt="img" />
                                        </a>
                                        <a className="confirm-text" href="javascript:void(0);">
                                            <img src="/assets/img/icons/delete.svg" alt="img" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPermissions;
