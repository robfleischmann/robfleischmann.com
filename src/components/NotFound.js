import React, { Component } from 'react';

class NotFound extends Component {
  render () {
    return (
        <header className="masthead masthead-full text-white">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col text-center">
                        <div className="masthead-title text-uppercase">404 Error</div>
                        <hr className="primary small" />
                        <div className="masthead-subtitle">
                            Page Not Found
                        </div>
                    </div>
                </div>
            </div>
        </header>
      );
  }
}

export default NotFound;
