import React, { Component } from 'react';
import './assets/SideNav.scss';
import SkillTab from "./SkillTab";

const skills1 = [
    {id: 1, title: 'Java', lvl: '5', alternate: true},
    {id: 2, title: 'Android', lvl: '5', alternate: false},
    {id: 3, title: 'Maven', lvl: '4', alternate: true},
    {id: 4, title: 'ODBC', lvl: '5', alternate: false},
    {id: 5, title: 'Gradle', lvl: '3', alternate: true},
];

const skills2 = [
    {id: 1, title: 'PHP', lvl: '6', alternate: true},
    {id: 2, title: 'HTML', lvl: '7', alternate: false},
    {id: 3, title: 'CSS/SASS', lvl: '6', alternate: true},
    {id: 4, title: 'JS ES2017', lvl: '5', alternate: false},
    {id: 5, title: 'API REST', lvl: '6', alternate: true},
];

const skills3 = [
    {id: 1, title: 'Photoshop', lvl: '6', alternate: true},
    {id: 2, title: 'Illustrator', lvl: '5', alternate: false},
    {id: 3, title: 'InDesign', lvl: '5', alternate: true},
    {id: 4, title: 'UX Design', lvl: '5', alternate: false},
    {id: 5, title: 'UI Design', lvl: '3', alternate: true},
];

const skills4 = [
    {id: 1, title: 'GIT', lvl: '6', alternate: true},
    {id: 2, title: 'SCRUM', lvl: '4', alternate: false},
    {id: 3, title: 'Selenium', lvl: '3', alternate: true},
    {id: 4, title: 'Unit test', lvl: '3', alternate: false},
    {id: 5, title: 'MVC', lvl: '5', alternate: true},
];

class SideNav extends Component {
    state = {
        skill : 1,
    };

    handleBtnSkillPrevious() {
        let skill = this.state.skill;
        switch (skill) {
            case 1:
                this.setState({
                    skill : 4
                });
                break;
            case 2:
                this.setState({
                    skill : 1
                });
                break;
            case 3:
                this.setState({
                    skill : 2
                });
                break;
            case 4:
                this.setState({
                    skill : 3
                });
                break;
            default:
                break;
        }
    }

    handleBtnSkillNext() {
        let skill = this.state.skill;
        switch (skill) {
            case 1:
                this.setState({
                    skill : 2
                });
                break;
            case 2:
                this.setState({
                    skill : 3
                });
                break;
            case 3:
                this.setState({
                    skill : 4
                });
                break;
            case 4:
                this.setState({
                    skill : 1
                });
                break;
            default:
                break;
        }
    }

    render() {

        const { page, handleBtn1, handleBtn2, handleBtn3, handleBtnContactModalOpen, handleBtnMapModalOpen } = this.props;

        return (

            /* ------------------------- SIDENAV ------------------------- */

            <div className="sidenav">

                {/* ------------------------- TOP ------------------------- */}

                <div className="top">

                    {/* TITLE */}

                    <div className="title"><p>{page.title}</p></div>

                    {/* LINKS */}

                    {page.id === 1 ? (
                        <div className="link active" onClick={handleBtn1}/>
                    ) : (
                        <div className="link" onClick={handleBtn1}>
                            <p>HOME</p>
                        </div>
                    )}

                    {page.id === 2 ? (
                        <div className="link active" onClick={handleBtn2}/>
                    ) : (
                        <div className="link" onClick={handleBtn2}>
                            <p>COURSES</p>
                        </div>
                    )}

                    {page.id === 3 ? (
                        <div className="link active" onClick={handleBtn3}/>
                    ) : (
                        <div className="link" onClick={handleBtn3}>
                            <p>PORTFOLIO</p>
                        </div>
                    )}
                </div>

                {/* ------------------------- MIDDLE ------------------------- */}

                <div className="middle">

                    {/* DESCRIPTION */}

                    <div className="desc">
                        <div className="img"/>
                        <div className="text">
                            <div className="text-line one"/>
                            <div className="text-line two"/>
                            <div className="text-line three"/>
                            <div className="text-line four"/>
                            <div className="text-line five"/>
                        </div>
                    </div>

                    {/* SOCIAL */}

                    <div className="social">

                        {/* THUMBS */}

                        <div className="thumbs">
                            <div className="thumb">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/elielam" className="no-decoration"><i className="fab fa-github-square fa-2x"/></a>
                            </div>
                            <div className="thumb">
                                <a target="_blank" rel="noopener noreferrer" href="https://fr.linkedin.com/in/elie-laloum" className="no-decoration"><i className="fab fa-linkedin fa-2x"/></a>
                            </div>
                            <div className="thumb">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/elicopzzer" className="no-decoration"><i className="fab fa-facebook-square fa-2x"/></a>
                            </div>
                            <div className="thumb">
                                <a target="_blank" rel="noopener noreferrer" href="tel:+33633495607" className="no-decoration"><i className="fab fa-whatsapp-square fa-2x"/></a>
                            </div>
                            <div className="thumb" onClick={handleBtnContactModalOpen}>
                                <a className="no-decoration"><i className="fas fa-envelope-square fa-2x" onClick={handleBtnContactModalOpen}/></a>
                            </div>
                        </div>

                        {/* MAP */}

                        <div className="localisation">
                            <div className="overlay" onClick={handleBtnMapModalOpen}>
                                <a className="no-decoration"><i className="fas fa-search-plus fa-2x"/></a>
                            </div>
                        </div>

                    </div>

                </div>

                {/* ------------------------- BOTTOM ------------------------- */}

                <div className="bottom">

                    {/* PREVIOUS BTN */}

                    <div className="previous-btn-container" onClick={this.handleBtnSkillPrevious.bind(this)}>
                        <i className="fas fa-chevron-left"/>
                    </div>

                    {/* SKILLS CONTENT */}

                    <div className="content-container">

                        {this.state.skill === 1 && (
                            <SkillTab
                                skills={skills1}
                            />
                        )}

                        {this.state.skill === 2 && (
                            <SkillTab
                                skills={skills2}
                            />
                        )}

                        {this.state.skill === 3 && (
                            <SkillTab
                                skills={skills3}
                            />
                        )}

                        {this.state.skill === 4 && (
                            <SkillTab
                                skills={skills4}
                            />
                        )}

                    </div>

                    {/* NEXT BTN */}

                    <div className="next-btn-container" onClick={this.handleBtnSkillNext.bind(this)}>
                        <i className="fas fa-chevron-right"/>
                    </div>

                </div>

            </div>
        );
    }
}

export default SideNav;
