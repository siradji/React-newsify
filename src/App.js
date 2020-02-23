import React, { Fragment } from 'react';
import NavBar from './Layout/NavBar';
import News from './Components/Components/News';
import TopSection from './Layout/TopSection';

//  importing Context ApI
import TopNewsState from './Context/TopNews/TopNewsState';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';

//  Setting Up Material UI Theme Provider
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e50914'
    },
    secondary: {
      main: '#000'
    }
  },
  typography: {
    fontFamily: ['Raleway', 'san-serif'].join(',')
  }
});

const App = () => {
  return (
    <TopNewsState>
      <MuiThemeProvider theme={theme}>
        <div>
          <NavBar />
          <TopSection />
          <News />
        </div>
      </MuiThemeProvider>
    </TopNewsState>
  );
};

export default App;
