import React from 'react';

import Header from './Header';
import About from './About'
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import DATA from '../data';

class App extends React.Component{

    constructor(){
        super();

    }

    render(){
        return (<div>
            <Header />
            <About />
            <Skills dataSkills={DATA.skills} />
            <Projects dataProject={DATA.projects} />
            <Footer />
        </div>)
    }
}

export default App;
