import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User name="Rakib Enam" age={26} isRegistered={true}/>
      <User name="Arifuzzaman Sheikh" age={24} isRegistered={false}/>
        
    </div>
  );
}

export default App;
