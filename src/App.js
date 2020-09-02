import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import { render } from 'react-dom';

class App extends Component {
  // this react will re render when property or state has change
  // and it will rerender only where Dom must change :COOLLLL
  state = {
    person: [
      {name: 'K', age: 20},
      {name: "Nut", age: 33}
    ]
  }

  clickEventHandle = () =>{
    // this ... are call spread , [and also call rest if use for 
    // function name = (...args) => {} ...arge called rest use for collect args to list  ]
    // this use for avoid reference value [ like copy value ] , but primitive value are pass be value
    let personTemp = [...this.state.person]
    // react must use this for update state and it will effect only where it should effect
    this.setState({person:[
      {name: personTemp[1].name, age: personTemp[1].age},
      {name: personTemp[0].name, age: personTemp[0].age}
    ]})
  }

  // Note : in onClick that must not have () after method because if have it will run that while
  // react render at first time 
  // actualy jsx here are managed by react libaly [React.createElement()] that is why we need to 
  // import React 
  render() { 
    return (
    <div className="App">
     <h1>Hello React ?!</h1>
     <button onClick={this.clickEventHandle}>Swap data in array</button>
     <Person name="Static Name Krub" age= "0"></Person>
     <Person name={this.state.person[0].name} age= {this.state.person[0].age}></Person>
     <Person name={this.state.person[1].name} age= {this.state.person[1].age}></Person>
    </div>
    );
  }
}

export default App;
