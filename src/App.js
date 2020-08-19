import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header.component';
import Dashboard from './components/dashboard.component'

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
