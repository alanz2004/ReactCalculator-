import React, { Component } from 'react';
import '../App.css';
var math = require('mathjs');

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        currentInput: ''
      }
      
    this.handleChange = this.handleChange.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleChange(toChange) {
    this.setState({
      currentInput: this.state.currentInput + toChange
    })
  }
  handleEqual() {
    this.setState({
      currentInput: math.eval(this.state.currentInput)
    })
  }
  handleReset() {
    this.setState({
      currentInput: ''
    })
  }
  render() {
    return (
      <div className="container">
      <input type="text" className="input" value={this.state.currentInput} disabled="disabled"/>
      <div className="row">
      <button className="btn-up" onClick={this.handleReset}>AC</button>
      <button className="btn-up" onClick={() => this.handleChange('8')}>+-</button>
      <button className="btn-up" onClick={() => this.handleChange('%')}>%</button>
      <button className="btn-op" onClick={() => this.handleChange('/')}>/</button>
     </div>
      <div className="row">
      <button className="btn" onClick={() => this.handleChange('7')}>7</button>
      <button className="btn" onClick={() => this.handleChange('8')}>8</button>
      <button className="btn" onClick={() => this.handleChange('9')}>9</button>
      <button className="btn-op" onClick={() => this.handleChange('*')}>X</button>
     </div>
     <div className="row">
     <button className="btn" onClick={() => this.handleChange('4')}>4</button>
      <button className="btn" onClick={() => this.handleChange('5')}>5</button>
      <button className="btn" onClick={() => this.handleChange('6')}>6</button>
      <button className="btn-op" onClick={() => this.handleChange('-')}>-</button>
     </div>
      <div className="row">
      <button className="btn" onClick={() => this.handleChange('1')}>1</button>
      <button className="btn" onClick={() => this.handleChange('2')}>2</button>
      <button className="btn" onClick={() => this.handleChange('3')}>3</button>
      <button className="btn-op" onClick={() => this.handleChange('+')}>+</button>
      </div>
     <div className="row">
       <button className="btn" id="zero" onClick={() => this.handleChange('0')}>0</button>
       <button className="btn" onClick={() => this.handleChange('.')}>.</button>
       <button className="btn-op" onClick={this.handleEqual}>=</button>
     </div>
     
     
      </div>
    );
  }
}

export default App;
