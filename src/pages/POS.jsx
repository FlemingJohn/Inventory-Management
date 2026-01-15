import React from 'react';
import { Link } from 'react-router-dom';

const POS = () => {
    return (
        <div className="content">
            <div className="row">
                <div className="col-lg-8 col-sm-12 tabs_wrapper">
                    <div className="page-header ">
                        <div className="page-title">
                            <h4>Categories</h4>
                            <h6>Manage your purchases</h6>
                        </div>
                    </div>
                    <ul className=" tabs owl-carousel owl-theme owl-product  border-0 ">
                        <li className="active" id="fruits">
                            <div className="product-details ">
                                <img src="/assets/img/product/product62.png" alt="img" />
                                <h6>Fruits</h6>
                            </div>
                        </li>
                        <li id="headphone">
                            <div className="product-details ">
                                <img src="/assets/img/product/product63.png" alt="img" />
                                <h6>Headphones</h6>
                            </div>
                        </li>
                        <li id="Accessories">
                            <div className="product-details">
                                <img src="/assets/img/product/product64.png" alt="img" />
                                <h6>Accessories</h6>
                            </div>
                        </li>
                        <li id="Shoes">
                            <a className="product-details">
                                <img src="/assets/img/product/product65.png" alt="img" />
                                <h6>Shoes</h6>
                            </a>
                        </li>
                        <li id="computer">
                            <a className="product-details">
                                <img src="/assets/img/product/product66.png" alt="img" />
                                <h6>Computer</h6>
                            </a>
                        </li>
                        <li id="Snacks">
                            <a className="product-details">
                                <img src="/assets/img/product/product67.png" alt="img" />
                                <h6>Snacks</h6>
                            </a>
                        </li>
                        <li id="watch">
                            <a className="product-details">
                                <img src="/assets/img/product/product68.png" alt="img" />
                                <h6>Watches</h6>
                            </a>
                        </li>
                    </ul>
                    <div className="tabs_container">
                        <div className="tab_content active" data-tab="fruits">
                            <div className="row ">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="col-lg-3 col-sm-6 d-flex ">
                                        <div className={`productset flex-fill ${i === 0 ? 'active' : ''}`}>
                                            <div className="productsetimg">
                                                <img src={`/assets/img/product/product${29 + i}.jpg`} alt="img" onError={(e) => e.target.src = '/assets/img/product/product29.jpg'} />
                                                <h6>Qty: 5.00</h6>
                                                <div className="check-product">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                            </div>
                                            <div className="productsetcontent">
                                                <h5>Fruits</h5>
                                                <h4>Orange</h4>
                                                <h6>150.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 ">
                    <div className="order-list">
                        <div className="orderid">
                            <h4>Order List</h4>
                            <h5>Transaction id : #65565</h5>
                        </div>
                        <div className="actionproducts">
                            <ul>
                                <li>
                                    <a href="javascript:void(0);" className="deletebg confirm-text"><img src="/assets/img/icons/delete-2.svg" alt="img" /></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" class="dropset">
                                        <img src="/assets/img/icons/ellipise1.svg" alt="img" />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" data-popper-placement="bottom-end">
                                        <li><a href="#" className="dropdown-item">Action</a></li>
                                        <li><a href="#" className="dropdown-item">Another Action</a></li>
                                        <li><a href="#" className="dropdown-item">Something Elses</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card card-order">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Customer</label>
                                        <div className="input-groupicon">
                                            <input type="text" placeholder="Scan/Search Customer by name/phone" />
                                            <div className="addonset">
                                                <img src="/assets/img/icons/users1.svg" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="split-card"></div>
                        <div className="card-body pt-0">
                            <div className="totalitem">
                                <h4>Total items : 4</h4>
                                <a href="javascript:void(0);">Clear all</a>
                            </div>
                            <div className="product-table">
                                <ul className="product-lists">
                                    <li>
                                        <div className="productimg">
                                            <div className="productimgs">
                                                <img src="/assets/img/product/product30.jpg" alt="img" />
                                            </div>
                                            <div className="productcontet">
                                                <h4>Pineapple
                                                    <a href="javascript:void(0);" className="ms-2" data-bs-toggle="modal" data-bs-target="#edit"><img src="/assets/img/icons/edit-5.svg" alt="img" /></a>
                                                </h4>
                                                <div className="product-unit">
                                                    <h6>$ 10.00</h6>
                                                </div>
                                                <div className="increment-decrement">
                                                    <div className="input-groups">
                                                        <input type="button" defaultValue="-" className="button-minus dec button" />
                                                        <input type="text" name="child" defaultValue="1" className="quantity-field" />
                                                        <input type="button" defaultValue="+" className="button-plus inc button" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h6>$ 10.00</h6>
                                        <div className="close-key">
                                            <i className="fas fa-times"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="setvalue">
                                <ul>
                                    <li>
                                        <h5>Subtotal </h5>
                                        <h6>55.00$</h6>
                                    </li>
                                    <li>
                                        <h5>Tax </h5>
                                        <h6>5.50$</h6>
                                    </li>
                                    <li className="total-value">
                                        <h5>Total </h5>
                                        <h6>60.50$</h6>
                                    </li>
                                </ul>
                            </div>
                            <div className="setvaluecash">
                                <ul>
                                    <li><a href="javascript:void(0);" className="paymentmethod">Cash</a></li>
                                    <li><a href="javascript:void(0);" className="paymentmethod">Debit</a></li>
                                    <li><a href="javascript:void(0);" className="paymentmethod">Scan</a></li>
                                </ul>
                            </div>
                            <div className="btn-totallabel">
                                <h5>Checkout</h5>
                                <h6>60.50$</h6>
                            </div>
                            <div className="btn-pos">
                                <ul>
                                    <li><a href="javascript:void(0);"><img src="/assets/img/icons/pause1.svg" alt="img" className="me-1" />Hold</a></li>
                                    <li><a href="javascript:void(0);"><img src="/assets/img/icons/edit-6.svg" alt="img" className="me-1" />Quotation</a></li>
                                    <li><a href="javascript:void(0);"><img src="/assets/img/icons/trash2.svg" alt="img" className="me-1" />Void</a></li>
                                    <li><a href="javascript:void(0);"><img src="/assets/img/icons/wallet1.svg" alt="img" className="me-1" />Payment</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POS;
