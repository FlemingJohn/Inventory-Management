import React from 'react';

const Chat = () => {
    return (
        <div className="content">
            <div className="page-header">
                <div className="page-title">
                    <h4>Chat</h4>
                    <h6>Manage your Chats</h6>
                </div>
            </div>
            <div className="card chat-window">
                <div className="row">
                    <div className="col-lg-4 col-md-5 chat-users-list">
                        <div className="chat-users-list-header">
                            <div className="chat-user-search">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </div>
                        <div className="chat-users-list-content">
                            <div className="chat-user-item active">
                                <div className="chat-user-img">
                                    <img src="/assets/img/customer/customer1.jpg" alt="img" className="rounded-circle" />
                                </div>
                                <div className="chat-user-info">
                                    <h5>John Doe</h5>
                                    <p>How are you?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7 chat-messages">
                        <div className="chat-header">
                            <div className="chat-header-user">
                                <img src="/assets/img/customer/customer1.jpg" alt="img" className="rounded-circle" />
                                <h5>John Doe</h5>
                            </div>
                        </div>
                        <div className="chat-messages-content" style={{ height: '400px', overflowY: 'auto', padding: '20px' }}>
                            <div className="chat-message sent">
                                <p>Hello! Is the product available?</p>
                            </div>
                            <div className="chat-message received">
                                <p>Yes, it is in stock.</p>
                            </div>
                        </div>
                        <div className="chat-footer">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Type a message..." />
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
