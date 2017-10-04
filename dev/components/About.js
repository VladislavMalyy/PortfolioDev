import React from 'react';

class About extends React.Component{
    render(){
        return (<div className="aboutBlock">
            <div className="container">
                <div className="aboutBlock__photoArea">
                    <img className="aboutBlock__photo" src="./images/avatar.png" alt=""/>
                </div>
                <div className="aboutBlock__textBlock">
                    <h2 className="aboutBlock__title">About Me</h2>
                    <p className="aboutBlock__main-text">
                        Hello. My name is Vladislav. I am a frontend developer. I have been engaged in frontend since
                        December 2016, but I have been interested in programming since 2012. I studied at Odessa National
                        Polytechnic University from 2012 to 2016. I was learning a lot of technology at this time. Such as
                        Java, Php, JavaScript, SQL. I received diploma of specialist in information
                        management systems. I graduated the frontend courses at the Hillel Computer School. Frontend
                        Basic from September 2016 to December 2016. Frontend Pro from February 2017 to May 2016. I
                        started working from December 2016. I worked in the company Wideweb. All projects you can see below.
                    </p>
                    <h2 className="aboutBlock__title">I am a Frontend Developer</h2>
                    <p className="aboutBlock__text-timer"><span id="t"></span></p>
                </div>
            </div>
        </div>);
    }
}

export default About;