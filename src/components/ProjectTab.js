import React, { Component } from 'react';
import './assets/SkillTab.scss';

class ProjectTab extends Component {
    render() {

        const { row1, row2, row3, handleBtnProjectModalOpen } = this.props;

        return (

            /* ------------------------- PROJECT TAB ------------------------- */

            <div className="projects">

                    <div className="row">
                        {row1.map((project) =>
                            <div key={project.id} className="col" onClick={handleBtnProjectModalOpen}>
                                <img src={project.imgUrl} alt=""/>
                                <p>{project.title}</p>
                                <div className="overlay">
                                    <p>{project.desc}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="row">
                        {row2.map((project) =>
                            <div key={project.id} className="col" onClick={handleBtnProjectModalOpen}>
                                <img src={project.imgUrl} alt=""/>
                                <p>{project.title}</p>
                                <div className="overlay">
                                    <p>{project.desc}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="row">
                        {row3.map((project) =>
                            <div key={project.id} className="col" onClick={handleBtnProjectModalOpen}>
                                <img src={project.imgUrl} alt=""/>
                                <p>{project.title}</p>
                                <div className="overlay">
                                    <p>{project.desc}</p>
                                </div>
                            </div>
                        )}
                    </div>

            </div>

        );
    }
}

export default ProjectTab;
