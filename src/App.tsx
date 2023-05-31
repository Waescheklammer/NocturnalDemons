import React from "react";
import "./App.css";
import { Header } from "./features/header/Header";
import { Footer } from "./features/footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import { Main } from "./features/main/Main";
import { BrowserRouter as Router } from "react-router-dom";


const theme = createTheme({
  palette: {
    primary: {
      main: "#b5181e",
      light: "#b6161a",
      dark: "#6c1213",
    },
    secondary: {
      main: "#090404",
      light: "#E0E0E0",
      dark: "#8c8c8c",
    },
  },
  typography: {
    fontFamily: `'Share Tech Mono', monospace`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
