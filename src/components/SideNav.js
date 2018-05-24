import React, { Component } from 'react';
import './assets/SideNav.scss';

class SideNav extends Component {
    render() {

        const { page } = this.props;

        return (

            /* ------------------------- SIDENAV ------------------------- */

            <div className="sidenav">

                {/* ------------------------- TOP ------------------------- */}

                <div className="top">

                    {/* TITLE */}

                    <div className="title"><p>{page.title}</p></div>

                    {/* LINKS */}

                    <div className="link"></div>
                    <div className="link"></div>
                    <div className="link"></div>
                </div>

                {/* ------------------------- MIDDLE ------------------------- */}

                <div className="middle">

                    {/* DESCRIPTION */}

                    <div className="desc">
                    </div>

                    {/* SOCIAL */}

                    <div className="social">

                        {/* THUMBS */}

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

                        {/* MAP */}

                        <div className="localisation">
                            <div className="overlay">
                                <a className="no-decoration"><i className="fas fa-search fa-2x"/></a>
                            </div>
                        </div>

                    </div>

                </div>

                {/* ------------------------- BOTTOM ------------------------- */}

                <div className="bottom">

                    {/* PREVIOUS BTN */}

                    <div className="previous-btn-container">
                        <i className="fas fa-chevron-left"/>
                    </div>

                    {/* SKILLS CONTENT */}

                    <div className="content-container"></div>

                    {/* NEXT BTN */}

                    <div className="next-btn-container">
                        <i className="fas fa-chevron-right"/>
                    </div>

                </div>

            </div>
        );
    }
}

export default SideNav;
