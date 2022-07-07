import React from 'react';
import Home from './Home';
import { BrowserRouter, Route } from "react-router-dom";
import About from './About';
import Projects from './Projects';

class App extends React.Component {
  render() {
    return (
       <BrowserRouter>
        <Route exact path="/portfolio" component={Home} />
        <Route path="/portfolio#about" component={About} />
        <Route exact path="/portfolio#central-box" component={Projects} />
      </BrowserRouter>


    )
  }
}

export default App;
