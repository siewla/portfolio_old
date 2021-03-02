import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Section from './Components/Section';
import { MDBBtn } from 'mdbreact';

const App = () => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className='App'>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        {/* <MDBBtn onClick={toggleTheme}>Toggle Theme</MDBBtn> */}
        <Section id='section1' />
        <Section id='section2' />
        <Section id='section3' />
        <Section id='section4' />
        <Section id='section5' />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
