import React from 'react';
import { Link } from 'react-router-dom';

const EditProduct = () => {
    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div className="page-title">
                        <h4>Product Edit</h4>
                        <h6>Update your product</h6>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input type="text" defaultValue="Macbook pro" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Category</label>
                                    <select className="select">
                                        <option>Computers</option>
                                        <option>Mac</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Sub Category</label>
                                    <select className="select">
                                        <option>None</option>
                                        <option>option1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Brand</label>
                                    <select className="select">
                                        <option>None</option>
                                        <option>option1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Unit</label>
                                    <select className="select">
                                        <option>Piece</option>
                                        <option>Kg</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>SKU</label>
                                    <input type="text" defaultValue="PT0002" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Minimum Qty</label>
                                    <input type="text" defaultValue="5" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Quantity</label>
                                    <input type="text" defaultValue="50" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control" defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Tax</label>
                                    <select className="select">
                                        <option>Choose Tax</option>
                                        <option>2%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Discount Type</label>
                                    <select className="select">
                                        <option>Percentage</option>
                                        <option>10%</option>
                                        <option>20%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Price</label>
                                    <input type="text" defaultValue="1500.00" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label> Status</label>
                                    <select className="select">
                                        <option>Active</option>
                                        <option>Open</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label> Product Image</label>
                                    <div className="image-upload">
                                        <input type="file" />
                                        <div className="image-uploads">
                                            <img src="/assets/img/icons/upload.svg" alt="img" />
                                            <h4>Drag and drop a file to upload</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="product-list">
                                    <ul className="row">
                                        <li>
                                            <div className="productviews">
                                                <div className="productviewsimg">
                                                    <img src="/assets/img/icons/macbook.svg" alt="img" />
                                                </div>
                                                <div className="productviewscontent">
                                                    <div className="productviewsname">
                                                        <h2>macbookpro.jpg</h2>
                                                        <h3>581kb</h3>
                                                    </div>
                                                    <a href="javascript:void(0);" className="hideset">x</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <button className="btn btn-submit me-2">Update</button>
                                <Link to="/products" className="btn btn-cancel">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
