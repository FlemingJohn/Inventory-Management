import React from 'react';

const Profile = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Profile</h4>
                    <h6>User Profile</h6>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="profile-set">
                        <div className="profile-head"></div>
                        <div className="profile-top">
                            <div className="profile-content">
                                <div className="profile-contentimg">
                                    <img src="/assets/img/customer/customer5.jpg" alt="img" id="blah" />
                                    <div className="profileupload">
                                        <input type="file" id="imgInp" />
                                        <a href="javascript:void(0);"><img src="/assets/img/icons/edit-set.svg" alt="img" /></a>
                                    </div>
                                </div>
                                <div className="profile-contentname">
                                    <h2>William Castillo</h2>
                                    <h4>Updates your photo and personal details.</h4>
                                </div>
                            </div>
                            <div className="ms-auto">
                                <a href="javascript:void(0);" className="btn btn-submit me-2">Save</a>
                                <a href="javascript:void(0);" className="btn btn-cancel">Cancel</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" placeholder="William" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" placeholder="Castillo" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" placeholder="william@example.com" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" placeholder="+1452 875 454" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" placeholder="williamcastillo" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="form-group">
                                <label>Password</label>
                                <div className="pass-group">
                                    <input type="password" />
                                    <span className="fas toggle-password fa-eye-slash"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
