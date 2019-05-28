import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
     
      <Greet name="Jaishree" designation="Software Developer" />
      <Welcome name="Jaishree" designation="Software Developer" />
    </div>
  );
}

export default App;
