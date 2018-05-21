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
                <div className="link1"></div>
                <div className="link"></div>
              </div>
              <div className="middle">
                <div className="desc"></div>
                <div className="social"></div>
              </div>
              <div className="bottom">
                  <div className="previous-btn-container">
                    <div className="icon"></div>
                  </div>
                  <div className="content-container"></div>
                  <div className="next-btn-container">
                      <span className="icon"></span>
                  </div>
              </div>
          </div>
          <div className="container">
            <div className="page">
            </div>
            <div className="toolbar">
                <div className="previous-btn-container">
                    <div className="icon"></div>
                </div>
                <div className="links-container">
                  <a className="link"></a>
                </div>
                <div className="next-btn-container">
                    <div className="icon"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
