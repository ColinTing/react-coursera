import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from "./Heading";
import Example from "./Example";

function App() {
  return (
      <div className='App'>
        <Heading title="This is the heading text!"></Heading>
        <Example/>
      </div>
  );
}

export default App;
