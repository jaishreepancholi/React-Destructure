import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Welcome from './Welcome';
import Parent from './parent';

function App() {
  return (
    <div className="App">
     
      <Greet name="Jaishree" designation="Software Developer" />
      <Welcome name="Jaishree" designation="Software Developer" />
      <Parent />
    </div>
  );
}

export default App;
