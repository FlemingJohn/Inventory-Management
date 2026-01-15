import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
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
                                <h3>Sign In</h3>
                                <h4>Please login to your account</h4>
                            </div>
                            <div className="form-login">
                                <label>Email</label>
                                <div className="form-addons">
                                    <input type="text" placeholder="Enter your email address" />
                                    <img src="/assets/img/icons/mail.svg" alt="img" />
                                </div>
                            </div>
                            <div className="form-login">
                                <label>Password</label>
                                <div className="pass-group">
                                    <input type="password" placeholder="Enter your password" />
                                    <span className="fas toggle-password fa-eye-slash"></span>
                                </div>
                            </div>
                            <div className="form-login">
                                <div className="alreadyuser">
                                    <h4><Link to="/forgot-password">Forgot Password?</Link></h4>
                                </div>
                            </div>
                            <div className="form-login">
                                <Link className="btn btn-login" to="/">Sign In</Link>
                            </div>
                            <div className="signinform text-center">
                                <h4>Don’t have an account? <Link to="/signup" className="hover-a">Sign Up</Link></h4>
                            </div>
                            <div className="form-setlogin">
                                <h4>Or sign up with</h4>
                            </div>
                            <div className="form-sociallink">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <img src="/assets/img/icons/google.png" className="me-2" alt="google" />
                                            Sign Up using Google
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <img src="/assets/img/icons/facebook.png" className="me-2" alt="facebook" />
                                            Sign Up using Facebook
                                        </a>
                                    </li>
                                </ul>
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

export default SignIn;
