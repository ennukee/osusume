import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Landing } from 'Views/Landing/Landing';
import { Media } from 'Views/Media/Media';
import { Portal } from 'Views/Portal/Portal';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/anime/:id">
          <Media type="anime" />
        </Route>
        <Route path="/manga/:id">
          <Media type="manga" />
        </Route>
        <Route path="/home">
          <Portal />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
