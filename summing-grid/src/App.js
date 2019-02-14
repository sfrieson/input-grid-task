import React, { Component } from 'react';
import './App.css';

import formatNumber from './utils/formatNumber';

const inputs = [
  {name: 'cell1', label: 'Cell 1'},
  {name: 'cell2', label: 'Cell 2'},
  {name: 'cell3', label: 'Cell 3'}
];
const fieldValidationRE = /^\d*$/;

class App extends Component {
  constructor (props) {
    super(props);

    this.state = inputs.reduce((state, input) => {
      state[input.name] = '';
      return state;
    }, {});

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange ({ target }) {
    if (fieldValidationRE.test(target.value)) this.setState({[target.name]: target.value});
  }

  render () {
    const sum = inputs.reduce((sum, { name }) => {
      const num = parseFloat(this.state[name]) || 0;
      return sum + num;
    }, 0);

    return (
      <div className='App'>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='grid'>
          {inputs.map(input => (
            <div key={input.name} className='grid-cell'>
              <label className='visually-hidden' htmlFor={input.name}>
                {input.label}
              </label>
              <input id={input.name}
                className='grid-cell__input number-display'
                name={input.name}
                onChange={this.handleChange}
                type='text'
                value={this.state[input.name]}
              />
            </div>
          ))}
          <div className='grid-cell grid-cell--display number-display'>{formatNumber(sum)}</div>
        </div>
      </div>
    );
  }
}

export default App;
