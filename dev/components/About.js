import React from 'react';

class About extends React.Component{
    render(){
        return (<div className="aboutBlock">
            <div className="container">
                <div className="aboutBlock__photoArea">
                    <img className="aboutBlock__photo" src="http://via.placeholder.com/350x450" alt=""/>
                </div>
                <div className="aboutBlock__textBlock">
                    <h2 className="aboutBlock__title">About Me</h2>
                    <p className="aboutBlock__main-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda culpa debitis nulla
                        quaerat! Commodi dicta, ea, fugiat ipsam magni nemo nihil obcaecati quae quibusdam quod, rerum
                        sequi ullam voluptatem.
                    </p>
                    <h2 className="aboutBlock__title">I am Frontend Developer</h2>
                    <p className="aboutBlock__text-timer"><span id="t"></span></p>
                </div>
            </div>
        </div>);
    }
}

export default About;