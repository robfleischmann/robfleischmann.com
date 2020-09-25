import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Experience extends Component {
  render () {
    return (
      <section className="callout callout-full text-white">
        <div className="container">
            <div className="text-center">
                <h2 className="page-section-heading text-uppercase">My Experience</h2>
                <p className="lead m-0">I am an experienced developer focused on providing a solid design on all projects. At my core I am a full stack
                developer, however I can easily switch to assisting with managing projects, leading a team or building sprints in tools like Azure DevOps.</p>
                <hr className="primary mb-5" />
            </div>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="card card-transparency">
                  <div className="card-header">
                    Programming Languages
                  </div>
                  <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">Angular 4</div>
                        <div className="col-md-4">Angular JS</div>
                        <div className="col-md-4">C/C++</div>
                        <div className="col-md-4">C#/.Net</div>
                        <div className="col-md-4">Cold Fusion</div>
                        <div className="col-md-4">CSS</div>
                        <div className="col-md-4">HTML</div>
                        <div className="col-md-4">JavaScript</div>
                        <div className="col-md-4">PHP</div>
                        <div className="col-md-4">PL/SQL</div>
                        <div className="col-md-4">React</div>
                        <div className="col-md-4">VB.Net</div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="card card-transparency">
                  <div className="card-header">
                    Database / Reporting
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">Microsoft SQL Server</div>
                      <div className="col-md-4">MySQL</div>
                      <div className="col-md-8">PostgreSQL</div>
                      <div className="col-md-4">Oracle</div>
                    </div>
                    <div className="row">                      
                      <div className="col-md-8">Noetix</div>
                      <div className="col-md-4">QlikView</div>
                      <div className="col-md-8">SSRS</div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row"><div className="col-md-12">&nbsp;</div></div>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="card card-transparency">
                  <div className="card-header">
                    Version Control
                  </div>
                  <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">CVS</div>
                        <div className="col-md-4">Git</div>
                        <div className="col-md-4">Subversion</div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="card card-transparency">
                  <div className="card-header">
                    Misc Skills
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">Adobe LiveCycle</div>
                      <div className="col-md-6">Unix Administration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <br />
              <hr className="primary mb-5" />
              <p className="lead m-0">
                Please <Link className="text-white" to="/contact">contact me</Link> if you would like my full resume along with any references.
                You are also welcome to visit my <a className="text-white" href="https://github.com/robfleischmann">GitHub site</a>.
              </p>                
            </div>
        </div>
      </section>
    );
  }
}

export default Experience;