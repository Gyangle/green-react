// theme and colors
import { createTheme, ThemeProvider } from '@mui/material/styles';

// components
import MenuBar from "./Components/Navigation/MenuBar";
import HomePage from './Components/Home/HomePage';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        
      </>
    </ThemeProvider>

  );
}

function Home() {
  return (
    <>
      <MenuBar />
      <HomePage />
      <Footer />
    </>
  )
}

function About() {
  return (
    <>
      <MenuBar />
      <AboutUs />
      <Footer />
    </>
  )
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#054A29',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
  typography: {
    allVariants: {
      color: '#03331c'
    },
    fontFamily: [`"Lora", "Roboto", "Helvetica", "Arial", sans-serif`]
  }
});

export default App;
