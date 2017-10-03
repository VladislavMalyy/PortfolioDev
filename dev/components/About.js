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
                        Hello. My name is Vladislav. I am a frontend developer. I have been engaged in frontend since
                        December 2016, but I am interested in programming since 2012. I studied at Odessa National
                        Polytechnic University from 2012 to 2016. I taught a lot of technology at this time. Such as
                        Java, Php, JavaScript, SQL. I received a diploma of a specialist in information
                        management systems. I graduated from the frontend courses at the Hillel Computer School. Frontend
                        Basic from September 2016 to December 2016. Frontend Pro from February 2017 to May 2016. I
                        started working from December 2016. I worked in the company Wideweb. All the projects you can see below.
                    </p>
                    <h2 className="aboutBlock__title">I am Frontend Developer</h2>
                    <p className="aboutBlock__text-timer"><span id="t"></span></p>
                </div>
            </div>
        </div>);
    }
}

export default About;