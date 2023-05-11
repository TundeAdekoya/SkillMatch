import React from 'react';
import NavBar from './Common/NavBar'
import Footer from './Common/Footer'
// import Test from './Components/Component'
// import './App.css';
import SinglePage from './Screen/SinglePage';

function App() {

  return (
    <div className="App">
      <NavBar />
      < SinglePage/>
      {/* <Test/> */}
      <Footer/>
    </div>
  );
}

export default App;
