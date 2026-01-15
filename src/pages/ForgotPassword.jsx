import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div className="main-wrapper">
            <div className="account-content">
                <div className="login-wrapper">
                    <div className="login-content">
                        <div className="login-userset">
                            <div className="login-logo">
                                <img src="/assets/img/logo.png" alt="img" />
                            </div>
                            <div className="login-userheading">
                                <h3>Forgot password?</h3>
                                <h4>Don't worry! it happens. Please enter the address <br /> associated with your account.</h4>
                            </div>
                            <div className="form-login">
                                <label>Email</label>
                                <div className="form-addons">
                                    <input type="text" placeholder="Enter your email address" />
                                    <img src="/assets/img/icons/mail.svg" alt="img" />
                                </div>
                            </div>
                            <div className="form-login">
                                <a className="btn btn-login" href="javascript:void(0);">Submit</a>
                            </div>
                            <div className="signinform text-center">
                                <h4>Return to <Link to="/signin" className="hover-a">login</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="login-img">
                        <img src="/assets/img/login.jpg" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
