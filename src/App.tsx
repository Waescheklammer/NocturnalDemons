import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./features/header/Header";
import { Footer } from "./features/footer/Footer";
import { Menu } from "./features/Menu/Menu";
import { Box, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { Main } from "./features/main/Main";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import "./i18n";
import MenuIcon from "@mui/icons-material/Menu";

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
  const [open, setOpen] = useState(false);

  const matches = useMediaQuery("(max-width:600px)");

  const [isDetails, setIsDetails] = useState(false);

  useEffect(() => {
    setIsDetails(window.location.href.includes("/details"))
  }, [window.location.href])

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <div className="App">
          <Router>
            {matches ? (
              <Box
                sx={{
                  width: "100vw",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <MenuIcon
                  sx={{
                    color: open || isDetails ? "secondary.light" : "secondary.main",
                    zIndex: "999",
                    position: "fixed",
                    width: "2em",
                    height: "2em",
                    mr: "0.5em",
                    mt: "0.5em",
                    transition: "2s",
                  }}
                  onClick={toggleOpen}
                ></MenuIcon>
                {open ? (
                  <Menu></Menu>
                ) : (
                  <Box>
                    <Main></Main>
                  </Box>
                )}
              </Box>
            ) : (
              <Box>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
              </Box>
            )}
          </Router>
        </div>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
