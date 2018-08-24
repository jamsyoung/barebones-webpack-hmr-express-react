import React from 'react';
import {HashRouter, Switch, Route, NavLink} from 'react-router-dom';
import Homepage from './homepage.js';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <shell-container>
          <nav>
            <NavLink to="/">HOME</NavLink> :: <NavLink to="/foo">A 404 PAGE</NavLink>
          </nav>
          <content-container>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route render={() => <p>Not Found</p>} />
            </Switch>
          </content-container>
        </shell-container>
      </HashRouter>
    );
  }
}

module.exports = App;
