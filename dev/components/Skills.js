import React from 'react';
import SkillItem from './SkillItem';


class Skills extends React.Component{

    render(){

        const data = this.props.dataSkills;

        return (<div className="skillsBlock">
            <div className="container">
                <h2 className="skillsBlock__title">My Skills</h2>
                <div className="skillsBlock__skills">
                    {data.map((data) =>
                        <SkillItem key={data.id} data={data} />)}
                </div>
            </div>
        </div>)
    }
}

export default Skills;
