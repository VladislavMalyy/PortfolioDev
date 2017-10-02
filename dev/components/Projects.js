import React from 'react';
import ProjectItem from './ProjectItem';

class Projects extends React.Component{
    render(){

        const data = this.props.dataProject;

        let dataAllTasks = [];
        let dataCraftTasks = [];
        let dataCleanTasks = [];

        for(let i = 0; i < data.length; i++){
            if(data[i]['tasks'] == 'all'){
                dataAllTasks.push(data[i]);
            } else if(data[i]['tasks'] == 'craft'){
                dataCraftTasks.push(data[i])
            } else {
                dataCleanTasks.push(data[i])
            }
        }

        return(<div className="projectsBlock">
            <div className="container">
                <h2 className="projectsBlock__title">My Projects</h2>
                <h3 className="projectsBlock__subtitle">All frontend tasks in project</h3>
                <div className="projectsBlock__itemArea">

                    {dataAllTasks.map((data)=>
                            <ProjectItem key={data.id} data={data} />)}

                </div>
                <h3 className="projectsBlock__subtitle">Adaptation template for Craft CMS</h3>
                <div className="projectBlock__itemArea">

                    {dataCraftTasks.map((data)=>
                        <ProjectItem key={data.id} data={data} />)}

                </div>
                <h3 className="projectsBlock__subtitle">Updates on projects</h3>
                <div className="projectBlock__itemArea">
                    {dataCleanTasks.map((data)=>
                        <ProjectItem key={data.id} data={data} />)}
                </div>
            </div>
        </div>)
    }
}

export default Projects;
