import React, { Component } from 'react';
import './assets/PagePortfolio.scss';
import ProjectTab from "../ProjectTab";

class PagePortfolio extends Component {
    state = {
        projects: 1,
    };

    handleWebProjectBtn() {
        this.setState({
            projects: 1
        })
    }

    handleJavaProjectBtn() {
        this.setState({
            projects: 2
        })
    }

    handleCProjectsBtn() {
        this.setState({
            projects: 3
        })
    }

    handleDesignBtn() {
        this.setState({
            projects: 4
        })
    }

    render() {

        return (

            /* ------------------------- PAGE PORTFOLIO ------------------------- */

            <div className="page">

                {/* SELECTORS */}

                <div className="selectors">
                    <div className="tag first" onClick={this.handleWebProjectBtn.bind(this)}>
                        <p>CLIENT</p>
                    </div>
                    <div className="tag" onClick={this.handleJavaProjectBtn.bind(this)}>
                        <p>JAVA</p>
                    </div>
                    <div className="tag" onClick={this.handleCProjectsBtn.bind(this)}>
                        <p>C</p>
                    </div>
                    <div className="tag last" onClick={this.handleDesignBtn.bind(this)}>
                        <p>DESIGN</p>
                    </div>
                </div>

                {/* PROJECTS */}

                {this.state.projects === 1 && (
                    <ProjectTab
                        project={4}
                    />
                )}

                {this.state.projects === 2 && (
                    <ProjectTab
                        project={8}
                    />
                )}

                {this.state.projects === 3 && (
                    <ProjectTab
                        project={12}
                    />
                )}

                {this.state.projects === 4 && (
                    <ProjectTab
                        project={4}
                    />
                )}

            </div>
        );
    }
}

export default PagePortfolio;
