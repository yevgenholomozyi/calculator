import React from 'react';
import Calculator from './components/Calculator';
import Top from './components/Top/Top';
import Bottom from './components/Bottom';
import './style/main.scss';

function App() {
  return (
    <div className="app">
      <Top />
      <Calculator />
      <Bottom />
    </div>
  );
}

export default App;
