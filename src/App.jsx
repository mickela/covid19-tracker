import React from 'react';
// import logo from './logo.svg';
import './bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context';
import Routes from './Routes';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
