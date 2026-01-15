import React from 'react';

const ExpenseCategory = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Expense Category</h4>
                    <h6>Manage your Expense Category</h6>
                </div>
                <div className="page-btn">
                    <a className="btn btn-added" data-bs-toggle="modal" data-bs-target="#addcategory">
                        <img src="/assets/img/icons/plus.svg" alt="img" className="me-1" />Add Expense Category
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="table-top">
                        <div className="search-set">
                            <div className="search-input">
                                <a className="btn btn-searchset"><img src="/assets/img/icons/search-white.svg" alt="img" /></a>
                            </div>
                        </div>
                        <div className="wordset">
                            <ul>
                                <li>
                                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="/assets/img/icons/pdf.svg" alt="img" /></a>
                                </li>
                                <li>
                                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="/assets/img/icons/excel.svg" alt="img" /></a>
                                </li>
                                <li>
                                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="/assets/img/icons/printer.svg" alt="img" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table datanew">
                            <thead>
                                <tr>
                                    <th>
                                        <label className="checkboxs">
                                            <input type="checkbox" id="select-all" />
                                            <span className="checkmarks"></span>
                                        </label>
                                    </th>
                                    <th>Category Name</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label className="checkboxs">
                                            <input type="checkbox" />
                                            <span className="checkmarks"></span>
                                        </label>
                                    </td>
                                    <td>Food & Grocery</td>
                                    <td>Daily snacks and groceries</td>
                                    <td>
                                        <a className="me-3" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editcategory">
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

            {/* Add Modal */}
            <div className="modal fade" id="addcategory" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Category</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Category Name</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-submit">Submit</button>
                            <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            <div className="modal fade" id="editcategory" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Category</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Category Name</label>
                                        <input type="text" defaultValue="Food & Grocery" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control">Daily snacks and groceries</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-submit">Update</button>
                            <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpenseCategory;
