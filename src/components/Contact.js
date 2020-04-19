import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
  }

  // Post the form data to our PHP email client
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://robfleischmann.com/sendemail.php",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm();
      }
      else if (response.data.status === 'fail') {
        alert("Message failed to send.");
      }
    }).catch(function (error) {
      alert("Message failed to send.");
    });
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  // Event change handlers
  onNameChange(event) { this.setState({ name: event.target.value }); }
  onEmailChange(event) { this.setState({ email: event.target.value }); }
  onMessageChange(event) { this.setState({ message: event.target.value }); }

  render() {
    return (
      <header className="masthead masthead-full text-white">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-12 text-center">
              <h2 className="page-section-heading text-uppercase">Contact Me</h2>
              <p className="lead m-0">Please use the form to contact me, I will respond as soon as possible!</p>
              <hr className="primary small mb-5" />
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-10 col-xl-8 mx-auto">
                      <form id="contactForm" name="sentMessage" onSubmit={this.handleSubmit}>
                        <div className="row control-group">
                          <div className="form-group col-12 floating-label-form-group controls">
                            <label>Name</label>
                            <input className="form-control" id="name" type="text" placeholder="Name" required="required" value={this.state.name} onChange={this.onNameChange} />
                            <p className="help-block text-danger"></p>
                          </div>
                        </div>
                        <div className="row control-group">
                          <div className="form-group col-12 floating-label-form-group controls">
                            <label>Email Address</label>
                            <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" value={this.state.email} onChange={this.onEmailChange} />
                            <p className="help-block text-danger"></p>
                          </div>
                        </div>
                        <div className="row control-group">
                          <div className="form-group col-12 floating-label-form-group controls">
                            <label>Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" value={this.state.message} onChange={this.onMessageChange}></textarea>
                            <p className="help-block text-danger"></p>
                          </div>
                        </div>
                        <br />
                        <div id="success"></div>
                        <div className="row">
                          <div className="form-group col-12">
                            <Button color="primary">Send</Button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Contact;