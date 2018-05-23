import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Content from './components/Content/Content'
import classes from './App.css'


class App extends Component {
  render() {
    return (
      
      <div className={classes.App} >
          <Switch>
            <Route exact path='/' component={Content}/>
          </Switch>        
      </div>
    );
  }
}

export default App;
