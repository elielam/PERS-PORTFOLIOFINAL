import React, { Component } from 'react';
import './assets/SideNav.scss';

class SideNav extends Component {
    render() {
        return (
            <div className="sidenav">
                <div className="top">
                    <div className="title"></div>
                    <div className="link"></div>
                    <div className="link"></div>
                    <div className="link"></div>
                </div>
                <div className="middle">
                    <div className="desc"></div>
                    <div className="social">
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                    </div>
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
        );
    }
}

export default SideNav;
