import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// COMPONENTS 
import Navigation from './components/Navigation'
// MATERIAL UI 
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import white from '@material-ui/core/colors/deepPurple';
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    primary: white,
    secondary: grey
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation/>
      </Router>
    </ThemeProvider>
  );
}

export default App;