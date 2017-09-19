import React from 'react';

import Header from './Header';
import About from './About'
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import DATA from '../data';

class App extends React.Component{
    render(){
        return (<div>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>)
    }
}

export default App;
