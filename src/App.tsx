import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./features/header/Header";
import { Footer } from "./features/footer/Footer";
import { Menu } from "./features/Menu/Menu";
import { Box, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { Main } from "./features/main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import "./i18n";
import MenuIcon from "@mui/icons-material/Menu";
import { useReactPath } from "./hooks/ReactPath";

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
  const path = useReactPath();

  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(max-width:600px)");
  const [isDetails, setIsDetails] = useState(false);
  const [isContact, setIsContact] = useState(false);

  useEffect(() => {
    setIsDetails(
      window.location.pathname.includes("/details") ||
        window.location.pathname.includes("/")
    );

    setIsContact(
        window.location.pathname.includes("/contact")
    );
  }, [path]);

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
                  justifyContent: "flex-start",
                }}
              >
                <MenuIcon
                  sx={{
                    color:
                      open || isDetails ? (isContact && !open ? "secondary.main" : "secondary.light") : "secondary.main",
                    zIndex: "999",
                    position: "fixed",
                    width: "2em",
                    height: "2em",
                    ml: "0.5em",
                    mt: "0.5em",
                    transition: "1s",
                  }}
                  onClick={toggleOpen}
                ></MenuIcon>
                {open ? (
                  <Menu></Menu>
                ) : (
                  <Box>
                    <Main></Main>
                    <Footer></Footer>
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
