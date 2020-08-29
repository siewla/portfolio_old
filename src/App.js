import React from 'react';
import "./App.css";
import Navbar from "./Components/NavBar";
import Section from "./Components/Section";
import dummyText from "./dummyText";


function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Section
          id="section1"
        />
        <Section
          id="section2"
        />
        <Section
          id="section3"
        />
        <Section
          id="section4"
        />
      </div>
    </div>
  );
}

export default App;
