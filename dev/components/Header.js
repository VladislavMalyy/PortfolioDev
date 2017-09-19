import React from 'react';

class Header extends React.Component{
    render(){
        return (<div className="headerBlock">
            <div className="container">
                <div className="headerBlock__logo"><span className="text">VM</span></div>
                <ul className="headerBlock__nav">
                    <li className="headerBlock__link active"><a href="#">About</a></li>
                    <li className="headerBlock__link"><a href="#">Skills</a></li>
                    <li className="headerBlock__link"><a href="#">Projects</a></li>
                    <li className="headerBlock__link"><a href="#">Contacts</a></li>
                </ul>
            </div>
        </div>)
    }
}

export default Header;
