import React from 'react';
import NavBar from './Common/NavBar'
import Footer from './Common/Footer'
// import Test from './Components/Component'
// import './App.css';
import SinglePage from './Screen/SinglePage';
import {gsap, Power3} from 'gsap';

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  return (
    <div className="App">
      <NavBar timeline={tl} ease={ease}/>
      < SinglePage/>
      {/* <Test/> */}
      <Footer/>
    </div>
  );
}

export default App;
