import React, { Component } from 'react';
import './assets/PagePortfolio.scss';
import ProjectTab from "../ProjectTab";
import ModalAlertExperimental from "../ModalAlertExperimental.js";

const projects1row1 = [
    {id: 1, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
    {id: 2, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
    {id: 3, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
    {id: 4, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
];
const projects1row2 = [
    {id: 5, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
    {id: 6, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
    {id: 7, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
    {id: 8, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
];
const projects1row3 = [
    {id: 9, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
    {id: 10, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
    {id: 11, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
    {id: 12, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
];

const projects2row1 = [
    {id: 1, title: 'PROJECT', desc: "fdsf", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
    {id: 2, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
    {id: 3, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
    {id: 4, title: 'PROJECT', desc: "Lorem ipsum descriptum !", imgUrl: "http://static.cnews.fr/sites/default/files/default_images/default-thumbnail_0.jpg"},
];
const projects2row2 = [];
const projects2row3 = [];

class PagePortfolio extends Component {
    state = {
        projects: 1,
    };

    handleProjectBtnPrevious() {
        if (this.state.projects === 1) {
            this.setState({
                projects: 2
            })
        } else {
            this.setState({
                projects: 1
            })
        }
    }

    handleProjectBtnNext() {
        if (this.state.projects === 1) {
            this.setState({
                projects: 2
            })
        } else {
            this.setState({
                projects: 1
            })
        }
    }

    render() {

        const { handleBtnProjectModalOpen, modalAlertExperimental, handleModalAlertExperimentalClose } = this.props;

        return (

            /* ------------------------- PAGE PORTFOLIO ------------------------- */

            <div className="page">

                {/* SELECTORS */}

                <div className="selectors">
                    <div className="previous" onClick={this.handleProjectBtnPrevious.bind(this)}>
                        <i className="fas fa-chevron-left"/>
                    </div>
                    <div className="thumbnail">
                        {this.state.projects === 1 ? (
                            <i className="far fa-dot-circle"/>
                        ) : (
                            <i className="far fa-circle"/>
                        )}
                        {this.state.projects === 2 ? (
                            <i className="far fa-dot-circle"/>
                        ) : (
                            <i className="far fa-circle"/>
                        )}
                    </div>
                    <div className="next" onClick={this.handleProjectBtnNext.bind(this)}>
                        <i className="fas fa-chevron-right"/>
                    </div>
                </div>

                {/* PROJECTS */}

                {this.state.projects === 1 && (
                    <ProjectTab
                        row1={projects1row1}
                        row2={projects1row2}
                        row3={projects1row3}
                        handleBtnProjectModalOpen={handleBtnProjectModalOpen}
                    />
                )}

                {this.state.projects === 2 && (
                    <ProjectTab
                        row1={projects2row1}
                        row2={projects2row2}
                        row3={projects2row3}
                        handleBtnProjectModalOpen={handleBtnProjectModalOpen}
                    />
                )}

                {modalAlertExperimental && (
                    <ModalAlertExperimental
                        page="Portfolio"
                        handleModalAlertExperimentalClose={handleModalAlertExperimentalClose}
                    />
                )}

            </div>
        );
    }
}

export default PagePortfolio;
