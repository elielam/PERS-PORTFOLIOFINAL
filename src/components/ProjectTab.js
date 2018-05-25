import React, { Component } from 'react';
import './assets/SkillTab.scss';

class ProjectTab extends Component {
    render() {

        const { project } = this.props;
        let rowNbr = project/4;
        let thumb = [];
        switch(rowNbr) {
            case 1:
                thumb = [1];
                break;
            case 2:
                thumb = [1, 2];
                break;
            case 3:
                thumb = [1, 2, 3];
                break;
            case 4:
                thumb = [1, 2, 3, 4];
                break;
        }

        return (

            /* ------------------------- PROJECT TAB ------------------------- */

            <div className="projects">

                {thumb.map((number) =>
                    <div className="row">
                        <div className="col">
                            <img src="" alt=""/>
                            <div className="overlay"/>
                        </div>
                        <div className="col">
                            <img src="" alt="" className="test1"/>
                            <div className="overlay"/>
                        </div>
                        <div className="col">
                            <img src="" alt="" className="test2"/>
                            <div className="overlay"/>
                        </div>
                        <div className="col">
                            <img src="" alt="" className="test3"/>
                            <div className="overlay"/>
                        </div>
                    </div>
                )}

            </div>

        );
    }
}

export default ProjectTab;
