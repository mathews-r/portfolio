import React from 'react';
import Home from './Home';
import AppTryunfo from '../tryunfo/src/App';

import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
       <BrowserRouter>
        <Route exact path="/portfolio" component={Home} />
        <Route path="/tryunfo" component={AppTryunfo} />
        {/* <Route path="/trybetunes" component={AppTrybetunes} />
        <Route path="/pixelsart" component={AppTrybetunes} />
        <Route path="/clockjs" component={AppTrybetunes} />
        <Route path="/store" component={AppStore} />
        <Route path="/webweather" component={AppStore} /> */}
      </BrowserRouter>
    )
  }
}

export default App;
