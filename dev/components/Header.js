import React from 'react';
import $ from 'jquery';

class Header extends React.Component{

    constructor(){
        super();

        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(e){

        let link = $(e.target).data('block');

        $('html,body').animate({scrollTop: $(link).offset().top - 90}, 1000);

        $('.headerBlock__link').removeClass('active');

        $(e.target).closest('.headerBlock__link').addClass('active');
    }

    render(){

        $(window).scroll(function(){
            if($(this).scrollTop() > 10){
                $('.headerBlock').css('height','6rem');
            } else {
                $('.headerBlock').css('height','9rem');
            }
        });

        return (<div className="headerBlock">
            <div className="container">
                <div className="headerBlock__logo"><span className="text">VM</span></div>
                <ul className="headerBlock__nav">
                    <li className="headerBlock__link active"><a href="#" data-block=".aboutBlock" onClick={this.handlerClick}>About</a></li>
                    <li className="headerBlock__link"><a href="#" data-block=".skillsBlock" onClick={this.handlerClick}>Skills</a></li>
                    <li className="headerBlock__link"><a href="#" data-block=".projectsBlock" onClick={this.handlerClick}>Projects</a></li>
                    <li className="headerBlock__link"><a href="#" data-block=".footerBlock" onClick={this.handlerClick}>Contacts</a></li>
                </ul>
            </div>
        </div>)
    }
}

export default Header;
