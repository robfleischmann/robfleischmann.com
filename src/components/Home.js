import React, { Component } from 'react';

class Home extends Component {
  render () {
    return (
        <header className="masthead masthead-full text-white">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col text-center">
                        <img className="masthead-logo mb-4" src="assets/img/profilepic.png" alt="" />
                        <div className="masthead-title text-uppercase">Rob Fleischmann</div>
                        <hr className="primary small" />
                        <div className="masthead-subtitle">
                            Welcome to my personal site! Here you can view my experiences in the computer programming field or learn about my hobbies.<br />
                            Thank you for visiting!
                        </div>
                    </div>
                </div>
            </div>
            <div className="masthead-scroll">
                <a className="masthead-scroll-btn js-scroll-trigger" href="#page-bottom"><i className="fas fa-angle-down"></i></a>
            </div>
        </header>
      );
  }
}

export default Home;
