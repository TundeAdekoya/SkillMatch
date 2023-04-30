import React from 'react';
import NavBar from './Common/NavBar'
import Footer from './Common/Footer'
import Test from './Components/Component'
import Home from './Components/Home'
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      {/* <Test/> */}
      <Footer/>
    </div>
  );
}

export default App;
