// theme and colors
import { createTheme, ThemeProvider } from '@mui/material/styles';

// components
import MenuBar from "./Components/Navigation/MenuBar";
import HomePage from './Components/Home/HomePage';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <header>
          <MenuBar />
        </header>
        <HomePage />
        <footer>
          <Footer />
        </footer>
      </>
    </ThemeProvider>

  );
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
