import React from 'react';

class Footer extends React.Component{
    render(){
        return(<div className="footerBlock">
            <div className="container">
                <div className="footerBlock__contacts">
                    <p className="footerBlock__contactItem">Email: <a href="mailto:vladislavmalyy.dev@gmail.com">vladislavmalyy.dev@gmail.com</a></p>
                    <p className="footerBlock__contactItem">Phone: <a href="tel:380952159542">+380952159542</a></p>
                    <p className="footerBlock__contactItem">Skype: <a href="skype:vladislavmaliy">vladislavmaliy</a></p>
                </div>
                <div className="footerBlock__links">
                    <a className="footerBlock__linkItem" href="https://www.facebook.com/vladisvavMalyyFEDev" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a className="footerBlock__linkItem" href="https://www.linkedin.com/in/vladislav-malyy-73a20b130/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a className="footerBlock__linkItem" href="https://github.com/VladislavMalyy" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>)
    }
}

export default Footer;