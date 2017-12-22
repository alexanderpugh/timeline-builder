import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import CreateTimeline from './containers/CreateTimeline';
import Timeline from './containers/Timeline';
import NotFound from './components/NotFound';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={CreateTimeline} />
          <Route exact path="/view/:id" component={Timeline} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
