import React, { Component } from 'react';

class Hobbies extends Component {
  render () {
    return (
      <section className="hobbies hobbies-full text-white">
        <div className="container h-100">
          <div className="text-center">
            <h2 className="page-section-heading text-uppercase">My Hobbies</h2>
            <hr className="primary small mb-5" />
            <p className="lead m-0">I enjoy various creative hobbies as I feel it is important to keep that part of the mind active. These hobbies include:</p>
            <br />
            <details open="">
              <summary>Graphics Design</summary>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <p>
                    My first introduction to graphics creation was back in the early 2000s, a gaming forum member taught me how to build wallpapers using layers and masks.
                    I continued learning various techniques and eventually got Adobe Photoshop (I had been using Paint Shop Pro).
                  </p>
                </div>
                <div className="col-md-2"></div>
              </div>
            </details>
            <br />
            <details open="">
              <summary>Film Making</summary>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <p>
                    I ran a film company quite a few years ago, but I am still connected to many here in the Tampa Bay area and assist with projects or join film competitions.
                    My role with the company was Director of Photography but I also was the main editor of our films. We used Adobe Premiere and I started to also dabble with
                    Adobe After Effects. 
                  </p>
                </div>
                <div className="col-md-2"></div>
              </div>
            </details>
            <br />
            <details open="">
              <summary>Photography</summary>
              <div className="row">
                <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <p>
                      I have always had a passion for taking a good shot, I even took classes at the Florida Museum of Photograpic Arts to increase my skill.
                      <br />You can find me at <a href="https://500px.com/bboombotz" target="_blank" rel="noopener noreferrer" className="text-white">500px</a>
                    </p>
                  </div>
                <div className="col-md-2"></div>
              </div>
            </details>
          </div>
        </div>
      </section>
    );
  }
}

export default Hobbies;