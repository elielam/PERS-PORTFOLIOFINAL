import React, { Component } from 'react';
import './assets/SkillTab.scss';

class SkillTab extends Component {
    render() {

        const { title, skills } = this.props;

        return (

            /* ------------------------- SKILLTAB ------------------------- */

            <div className="skilltab">
                <p>{title}</p><br/>
                {skills.map((skill) =>
                    <p>{skill.title}</p>
                )}
            </div>
        );
    }
}

export default SkillTab;
