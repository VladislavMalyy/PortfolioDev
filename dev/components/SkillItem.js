import React from 'react';

class SkillItem extends React.Component{

    constructor(){
        super();
    }

    render(){

        return (
            <div className="skillsItem">
                <div className="skillsItem__imgBlock">
                    <img className={"skillsItem__logo logo" + this.props.data.id} src={this.props.data.imgUrl} alt=""/>
                </div>
                <h2 className="skillsItem__title">{this.props.data.title}</h2>
                <p className="skillsItem__desc">
                    {this.props.data.desc}
                </p>
            </div>
        )
    }
}

export default SkillItem;


