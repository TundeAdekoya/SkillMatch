import React from 'react';
import NavBar from './Common/NavBar'
import Footer from './Common/Footer'
import Test from './Components/Component'
import Home from './Components/Home'
import Developer from './Components/Developer'
import Product from './Components/Product'
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Developer/>
      <Product/>
      {/* <Test/> */}
      <Footer/>
    </div>
  );
}

export default App;
