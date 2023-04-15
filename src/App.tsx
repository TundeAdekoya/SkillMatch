import React from 'react';
import logo from './logo.svg';
import  {Route, Routes} from  'react-router-dom'
import NavBar from './Common/NavBar'
import Footer from './Common/Footer'
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Footer/>
    </div>
  );
}

export default App;
