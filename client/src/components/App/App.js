import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RouterURL from '../RouterURL/RouterURL';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
          <div className="">
            <RouterURL></RouterURL>
          </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
