import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
          <div className='grid'>
            <div className='grid-cell'>1</div>
            <div className='grid-cell'>2</div>
            <div className='grid-cell'>3</div>
            <div className='grid-cell'>4</div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
