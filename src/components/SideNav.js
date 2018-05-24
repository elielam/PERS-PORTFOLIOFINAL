import React, { Component } from 'react';
import './assets/SideNav.scss';
import SkillTab from "./SkillTab";

const skills1 = [
    {id: 1, title: 'Java'},
    {id: 2, title: 'C++'},
    {id: 3, title: 'C+'},
    {id: 4, title: 'C#'},
    {id: 5, title: 'Web'},
    {id: 6, title: 'Android'},
];

const skills2 = [
    {id: 1, title: 'Photoshop'},
    {id: 2, title: 'Illustrator'},
    {id: 3, title: 'InDesign'},
    {id: 4, title: 'SolidWorks'},
    {id: 5, title: 'AutoCAD'},
    {id: 6, title: 'UI Design'},
];

class SideNav extends Component {
    render() {

        const { page, handleBtn1, handleBtn2, handleBtn3 } = this.props;

        return (

            /* ------------------------- SIDENAV ------------------------- */

            <div className="sidenav">

                {/* ------------------------- TOP ------------------------- */}

                <div className="top">

                    {/* TITLE */}

                    <div className="title"><p>{page.title}</p></div>

                    {/* LINKS */}

                    {page.id === 2 ? (
                        <div className="link active" onClick={handleBtn1}/>
                    ) : (
                        <div className="link" onClick={handleBtn1}/>
                    )}

                    {page.id === 3 ? (
                        <div className="link active" onClick={handleBtn2}/>
                    ) : (
                        <div className="link" onClick={handleBtn2}/>
                    )}

                    {page.id === 4 ? (
                        <div className="link active" onClick={handleBtn3}/>
                    ) : (
                        <div className="link" onClick={handleBtn3}/>
                    )}
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

                    <div className="content-container">
                        <SkillTab
                            title={"test"}
                            skills={skills1}
                        />
                    </div>

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
