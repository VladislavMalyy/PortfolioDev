import React from 'react';

class ProjectItem extends React.Component{

    constructor(){
        super();
    }

    render(){

        const dataTools = this.props.data.tools;

        return(
            <div className="projectsItem">
                <div className="projectsItem__descArea">
                    <h2 className="projectsItem__title">{this.props.data.title}</h2>
                    <p className="projectsItem__desc">
                        {this.props.data.description}
                    </p>
                    {(()=>{
                        if(dataTools.length){
                            return ( <div className="projectsItem__toolsBlock">
                                <h3 className="projectsItem__toolsTitle">Used tools:</h3>
                                <ul>
                                    {dataTools.map((item) =>
                                        <li key={item.id}>{item.title}</li>)}
                                </ul>
                            </div>)
                        }
                    })()}


                    <a className="projectsItem__link" target="_blank" href={this.props.data.link}>Go to WebSite</a>
                </div>
            </div>
        )
    }
}

export default ProjectItem;
