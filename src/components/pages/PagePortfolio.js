import React, { Component } from 'react';
import './assets/PagePortfolio.scss';
import ProjectTab from "../ProjectTab";

class PagePortfolio extends Component {
    state = {
        projects: 1,
    };

    handleProjectBtnPrevious() {
        if (this.state.projects !== 1) {
            this.setState({
                projects: this.state.projects - 1
            })
        }
    }

    handleProjectBtnNext() {
        if (this.state.projects !== 4) {
            this.setState({
                projects: this.state.projects + 1
            })
        }
    }

    render() {

        const { handleBtnProjectModalOpen } = this.props;

        return (

            /* ------------------------- PAGE PORTFOLIO ------------------------- */

            <div className="page">

                {/* SELECTORS */}

                <div className="selectors">
                    {this.state.projects === 1 ? (
                        <div className="previous disabled">
                            <i className="fas fa-times"/>
                        </div>
                    ) : (
                        <div className="previous" onClick={this.handleProjectBtnPrevious.bind(this)}>
                            <i className="fas fa-chevron-left"/>
                        </div>
                    )}
                    <div className="thumbnail">
                        {this.state.projects === 1 ? (
                            <i className="fas fa-circle"/>
                        ) : (
                            <i className="far fa-circle"/>
                        )}
                        {this.state.projects === 2 ? (
                            <i className="fas fa-circle"/>
                        ) : (
                            <i className="far fa-circle"/>
                        )}
                        {this.state.projects === 3 ? (
                            <i className="fas fa-circle"/>
                        ) : (
                            <i className="far fa-circle"/>
                        )}
                        {this.state.projects === 4 ? (
                            <i className="fas fa-circle"/>
                        ) : (
                            <i className="far fa-circle"/>
                        )}
                    </div>
                    {this.state.projects === 4 ? (
                        <div className="next disabled">
                            <i className="fas fa-times"/>
                        </div>
                    ) : (
                        <div className="next" onClick={this.handleProjectBtnNext.bind(this)}>
                            <i className="fas fa-chevron-right"/>
                        </div>
                    )}
                </div>

                {/* PROJECTS */}

                {this.state.projects === 1 && (
                    <ProjectTab
                        project={4}
                        handleBtnProjectModalOpen={handleBtnProjectModalOpen}
                    />
                )}

                {this.state.projects === 2 && (
                    <ProjectTab
                        project={8}
                        handleBtnProjectModalOpen={handleBtnProjectModalOpen}
                    />
                )}

                {this.state.projects === 3 && (
                    <ProjectTab
                        project={12}
                        handleBtnProjectModalOpen={handleBtnProjectModalOpen}
                    />
                )}

                {this.state.projects === 4 && (
                    <ProjectTab
                        project={4}
                        handleBtnProjectModalOpen={handleBtnProjectModalOpen}
                    />
                )}

            </div>
        );
    }
}

export default PagePortfolio;
