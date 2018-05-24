import React, { Component } from 'react';
import './assets/SideNav.scss';

class SideNav extends Component {
    render() {
        return (
            <div className="sidenav">
                <div className="top">
                    <div className="title"><p>TITLE</p></div>
                    <div className="link"></div>
                    <div className="link"></div>
                    <div className="link"></div>
                </div>
                <div className="middle">
                    <div className="desc">
                    </div>
                    <div className="social">
                        <div className="thumbs">
                            <div className="thumb">
                                <a className="no-decoration"><i className="fab fa-github-square fa-2x"/></a>
                            </div>
                            <div className="thumb">
                                <a className="no-decoration"><i className="fab fa-linkedin fa-2x"/></a>
                            </div>
                            <div className="thumb">
                                <a className="no-decoration"><i className="fab fa-facebook-square fa-2x"/></a>
                            </div>
                            <div className="thumb">
                                <a className="no-decoration"><i className="fab fa-whatsapp-square fa-2x"/></a>
                            </div>
                            <div className="thumb">
                                <a className="no-decoration"><i className="fas fa-envelope-square fa-2x"/></a>
                            </div>
                        </div>
                        <div className="localisation">
                            <div className="overlay">
                                <a className="no-decoration"><i className="fas fa-search fa-2x"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="previous-btn-container">
                        <i className="fas fa-chevron-left"/>
                    </div>
                    <div className="content-container"></div>
                    <div className="next-btn-container">
                        <i className="fas fa-chevron-right"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideNav;
