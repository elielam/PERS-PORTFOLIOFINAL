import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="panel">
          <div className="sidenav">
              <div className="top">
                <div className="title"></div>
                <div className="link"></div>
                <div className="link"></div>
                <div className="link"></div>
              </div>
              <div className="middle">
                <div className="desc"></div>
                <div className="social"></div>
              </div>
              <div className="bottom">
                  <div className="previous-btn-container">
                      <i className="fas fa-chevron-left"></i>
                  </div>
                  <div className="content-container"></div>
                  <div className="next-btn-container">
                      <i className="fas fa-chevron-right"></i>
                  </div>
              </div>
          </div>
          <div className="container">
            <div className="page">
            </div>
            <div className="toolbar">
                <div className="previous-btn-container">
                    <i className="fas fa-arrow-left fa-2x"></i>
                </div>
                <div className="links-container">
                  <div className="link">
                      <i className="fas fa-home fa-2x"></i>
                  </div>
                </div>
                <div className="next-btn-container">
                    <i className="fas fa-arrow-right fa-2x"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
