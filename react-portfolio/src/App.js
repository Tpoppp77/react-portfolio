import React from 'react';
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"

import About from "./components/About/About"
import Wrapper from "./Wrapper"

import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { HashRouter as Router, Route } from "react-router-dom"

function App() {
  return (

    <>
      <Router>
        <div>
          < NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Wrapper} />
        </div>
      </Router>
      < Footer />
    </>

  );
}

export default App;
