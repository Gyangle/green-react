// theme and colors
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MenuBar from "./Components/Navigation/MenuBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <MenuBar />
        </header>
      </div>
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
    }
  }
});



export default App;
