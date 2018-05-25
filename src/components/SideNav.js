import React, { Component } from 'react';
import './assets/SideNav.scss';
import SkillTab from "./SkillTab";

const skills1 = [
    {id: 1, title: 'Java', lvl: '3'},
    {id: 2, title: 'Android', lvl: '5'},
    {id: 3, title: 'C+', lvl: '2'},
    {id: 4, title: 'C#', lvl: '1'},
    {id: 5, title: 'Web', lvl: '3'},
];

const skills2 = [
    {id: 1, title: 'Photoshop', lvl: '4'},
    {id: 2, title: 'Illustrator', lvl: '1'},
    {id: 3, title: 'InDesign', lvl: '3'},
    {id: 4, title: 'UX Design', lvl: '5'},
    {id: 5, title: 'UI Design', lvl: '2'},
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
                    skill : 2
                });
                break;
            case 2:
                this.setState({
                    skill : 1
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
                    skill : 1
                });
                break;
            default:
                break;
        }
    }

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
                        <div className="link" onClick={handleBtn1}>
                            <p>COURSE</p>
                        </div>
                    )}

                    {page.id === 3 ? (
                        <div className="link active" onClick={handleBtn2}/>
                    ) : (
                        <div className="link" onClick={handleBtn2}>
                            <p>PORTFOLIO</p>
                        </div>
                    )}

                    {page.id === 4 ? (
                        <div className="link active" onClick={handleBtn3}/>
                    ) : (
                        <div className="link" onClick={handleBtn3}>
                            <p>TEST</p>
                        </div>
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
                                title={"1"}
                                skills={skills1}
                            />
                        )}

                        {this.state.skill === 2 && (
                            <SkillTab
                                title={"2"}
                                skills={skills2}
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
