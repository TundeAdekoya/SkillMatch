import React from 'react';
import NavBar from './Common/NavBar'
import Footer from './Common/Footer'
// import Test from './Components/Component'
import SinglePage from './Screen/SinglePage';
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      < SinglePage/>
      {/* <Test/> */}
      <Footer/>
    </div>
  );
}

export default App;
