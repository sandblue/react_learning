import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';
import { render } from 'react-dom';

const App = () => {

  // this call destructer , and useState are hook
  // useState alway return 2 value , first value in state and second setMethod
  // *** setMethod not merge it replace unlike state for class it merge
  // but it can have many call of useState , but state are only one
  const [personState, setPersonState] = useState({ person: [ {name: 'K', age: 20}, {name: "Nut", age: 33}]});

  const clickEventHandle = () => {
    let personTemp = [...personState.person];
    setPersonState({person:[
      {name: personTemp[1].name, age: personTemp[1].age},
      {name: personTemp[0].name, age: personTemp[0].age}
      ]
    });
  };

  return (
    <div className="App">
     <h1>Hello React ?!</h1>
     <button onClick={clickEventHandle}>Swap data in array</button>
     <Person name="Static Name Krub" age= "0"></Person>
     <Person name={personState.person[0].name} age= {personState.person[0].age}></Person>
     <Person name={personState.person[1].name} age= {personState.person[1].age}></Person>
    </div>
    );

}

export default App;
