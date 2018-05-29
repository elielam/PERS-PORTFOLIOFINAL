import React, { Component } from 'react';
import './assets/SkillTab.scss';

class ProjectTab extends Component {
    render() {

        const { project, handleBtnProjectModalOpen } = this.props;

        let rowNbr = project/4;

        // let lastRow = 0;
        let row = [];
        switch(rowNbr) {
            case 1:
                // lastRow = 1;
                row = [1];
                break;
            case 2:
                // lastRow = 2;
                row = [1, 2];
                break;
            case 3:
                // lastRow = 3;
                row = [1, 2, 3];
                break;
            case 4:
                // lastRow = 4;
                row = [1, 2, 3, 4];
                break;
            default:
                break;
        }
        // let lastRowThumbs = project % lastRow;

        return (

            /* ------------------------- PROJECT TAB ------------------------- */

            <div className="projects">

                {row.map((number) =>
                    <div key={number} className="row">
                        <div className="col" onClick={handleBtnProjectModalOpen}>
                            <img src="" alt=""/>
                            <div className="overlay"/>
                        </div>
                        <div className="col" onClick={handleBtnProjectModalOpen}>
                            <img src="" alt=""/>
                            <div className="overlay"/>
                        </div>
                        <div className="col" onClick={handleBtnProjectModalOpen}>
                            <img src="" alt=""/>
                            <div className="overlay"/>
                        </div>
                        <div className="col" onClick={handleBtnProjectModalOpen}>
                            <img src="" alt=""/>
                            <div className="overlay"/>
                        </div>
                    </div>
                )}

            </div>

        );
    }
}

export default ProjectTab;
