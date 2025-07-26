import { useState } from 'react';
import './App.css';
import Additon from './components/Addition';
import AreaOfcircle from './components/AreaOfcircle';
import SimpleInterest from './components/SimpleInterest'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React App Task2</h2>
      </header>
      <div className='features-component'>
      <Additon/>
      <AreaOfcircle/>
      <SimpleInterest/>
      </div>
    </div>
  );
}

export default App;
