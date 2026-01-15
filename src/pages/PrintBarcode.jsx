import React from 'react';

const PrintBarcode = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Print Barcode</h4>
                            <h6>Print product barcodes</h6>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="requiredfield">
                                <h4>The field labels marked with * are required input fields.</h4>
                            </div>
                            <div className="form-group">
                                <label>Product Name</label>
                                <div className="input-groupicon">
                                    <input type="text" placeholder="Please type product code and select..." />
                                    <div className="addonset">
                                        <img src="/assets/img/icons/scanners.svg" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive table-height">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>SKU</th>
                                            <th>Qty</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Macbook pro</td>
                                            <td>PT001</td>
                                            <td>100.00</td>
                                            <td className="text-end">
                                                <a className="delete-set"><img src="/assets/img/icons/delete.svg" alt="img" /></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Apple Earpods </td>
                                            <td>PT002</td>
                                            <td>1000.00</td>
                                            <td className="text-end">
                                                <a className="delete-set"><img src="/assets/img/icons/delete.svg" alt="img" /></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Macbook Pro</td>
                                            <td>PT003</td>
                                            <td>5000.00</td>
                                            <td className="text-end">
                                                <a className="delete-set"><img src="/assets/img/icons/delete.svg" alt="img" /></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Paper Size</label>
                                        <select className="select">
                                            <option>36mm (1.4 inch)</option>
                                            <option>12mm (1 inch)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <a href="javascript:void(0);" className="btn btn-submit me-2" data-bs-toggle="modal" data-bs-target="#scanner">Submit</a>
                                    <a href="javascript:void(0);" className="btn btn-cancel">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barcode Modal */}
            <div className="modal fade" id="scanner" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Barcode</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-barcode">
                                <ul>
                                    {[...Array(24)].map((_, i) => (
                                        <li key={i}>
                                            <a href="javascript:void(0);"><img src="/assets/img/barcode1.png" alt="img" /></a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-print"><img src="/assets/img/icons/printer.svg" alt="img" />Print</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrintBarcode;
