import React, { Component } from 'react';
import './assets/SkillTab.scss';

class SkillTab extends Component {
    render() {

        const { skills } = this.props;
        
        function returnLevel(skill) {
            let lvlThumb= [];
            let i = 0;
            for (let j = 0; j < skill.lvl ; j++) {
                lvlThumb.push(<i key={skill.id+j} className="fas fa-circle" style={{marginRight: '2%'}}/>);
                i++
            }
            for (let k = i; k < 7; k++) {
                lvlThumb.push(<i key={skill.id+k} className="far fa-circle" style={{marginRight: '2%'}}/>);
            }
            return lvlThumb;
        }

        return (

            /* ------------------------- SKILLTAB ------------------------- */

            <div className="skilltab">

                <div className="skills">
                    {skills.map((skill) =>
                        skill.alternate === true ? (
                            <div key={skill.id} className="skill alternate">
                                <div className="libelle">
                                    <p>{skill.title}</p>
                                </div>
                                <div className="level">
                                    {returnLevel(skill)}
                                </div>
                            </div>
                        ) : (
                            <div key={skill.id} className="skill">
                                <div className="libelle">
                                    <p>{skill.title}</p>
                                </div>
                                <div className="level">
                                    {returnLevel(skill)}
                                </div>
                            </div>
                        ))}
                </div>

            </div>
        );
    }
}

export default SkillTab;
