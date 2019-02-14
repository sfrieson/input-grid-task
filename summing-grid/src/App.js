import React, { Component } from 'react';
import './App.css';

const inputs = [
  {name: 'cell1', label: 'Cell 1'},
  {name: 'cell2', label: 'Cell 2'},
  {name: 'cell3', label: 'Cell 3'}
];

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
    this.setState({[target.name]: target.value});
  }

  render () {
    const sum = 4;

    return (
      <div className='App'>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
          <div className='grid'>
            {inputs.map(input => (
              <div className='grid-cell'>
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
            <div className='grid-cell number-display'>{sum}</div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
