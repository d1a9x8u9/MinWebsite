import React, { Component } from 'react';

import Content from './components/Content/Content'
import classes from './App.css'

class App extends Component {
  render() {
    return (
      <div className={classes.App} >
          <Content />        
      </div>
    );
  }
}

export default App;
