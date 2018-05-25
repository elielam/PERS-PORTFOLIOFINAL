import React, { Component } from 'react';
import './assets/SkillTab.scss';

class SkillTab extends Component {
    render() {

        const { title, skills } = this.props;

        return (

            /* ------------------------- SKILLTAB ------------------------- */

            <div className="skilltab">

                <div className="title">
                    <p>{title}</p>
                </div>

                <div className="skills">

                    {skills.map((skill) =>
                        <div className="skill">
                            {/*<p>{skill.title}</p>*/}
                            {/*<span>{skill.lvl}</span>*/}
                        </div>
                    )}

                </div>

            </div>
        );
    }
}

export default SkillTab;
