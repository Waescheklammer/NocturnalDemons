import {
  Box,
  Grid,
  Link,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import i18n from "../../i18n";
import { Lang } from "../../data/enums/Lang";
import { changeBgc } from "../../util/utils";
import { events } from "../../data/eventinfo/Event";

const MenuItem = styled(Grid)(({ theme }) => ({
  paddingTop: "2em",
  paddingBottom: "2em",
  borderBottom: "1px solid" + theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary.light,
  "&:active": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.light,
  },
}));

export const Menu = () => {
  const { t } = useTranslation("links");
  const matches = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const [lang, setLang] = useState<string>(
    localStorage.getItem("lng") || Lang.de
  );

  const items = [
    { title: "home", link: "/" },
    { title: "event", link: "/details" },
    { title: "tickets", link: events.ticketLink },
    { title: "info", link: "/contact" },
    { title: "gallery", link: "/gallery/kuhlhaus" },
    { title: "privacy", link: "/privacy" },
    { title: "imprint", link: "/imprint" },
  ];

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const changeToEn = () => {
    setLang(Lang.en);
    localStorage.setItem("lng", Lang.en);
  };

  const changeToDe = () => {
    setLang(Lang.de);
    localStorage.setItem("lng", Lang.de);
  };

  const changeToCz = () => {
    setLang(Lang.cz);
    localStorage.setItem("lng", Lang.cz);
  };

  const changeToPl = () => {
    setLang(Lang.pl);
    localStorage.setItem("lng", Lang.pl);
  };

  const handleRouting = (itemLink: string) => {
    if (itemLink === "imprint" || itemLink === "privacy") {
      changeBgc(
        matches ? theme.palette.primary.dark : theme.palette.secondary.main
      );
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        zIndex: "2",
        transition: "margin-top 1s ease-in",
        backgroundColor: "secondary.light",
      }}
    >
      <Grid>
        <Grid
          item
          sx={{
            minHeight: "4.5em",
            display: "flex",
            justifyContent: "flex-end",
            pr: "0.5em",
            pt: "0.8em",
            backgroundColor: "secondary.main",
          }}
        >
          <img
            src={"/images/logo/textless.webp"}
            alt={"Nocturnal Demons Head"}
            style={{ width: "4em", height: "3em" }}
          />
        </Grid>
        {items.map((item) => (
          <MenuItem item key={item.title}>
            {item.title === "tickets" ? (
                <Box
                    sx={{
                      textDecoration: "none",
                      textTransform: "uppercase",
                      color: "grey",
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      "&:active": {
                        color: "secondary.light",
                      },
                    }}
                >
                  <Typography
                      sx={{
                        fontWeight: "bold",
                        flex: "3",
                        textAlign: "left",
                        pl: "3em",
                      }}
                  >
                    {t(item.title)}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", flex: "1" }}>
                    {">"}
                  </Typography>
                </Box>
            ) : (
                <Link
                    href={item.link}
                    sx={{
                      textDecoration: "none",
                      textTransform: "uppercase",
                      color: "secondary.main",
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      "&:active": {
                        color: "secondary.light",
                      },
                    }}
                    onClick={() => handleRouting(item.link)}
                >
                  <Typography
                      sx={{
                        fontWeight: "bold",
                        flex: "3",
                        textAlign: "left",
                        pl: "3em",
                      }}
                  >
                    {t(item.title)}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", flex: "1" }}>
                    {">"}
                  </Typography>
                </Link>
            )}
          </MenuItem>
        ))}
        <Grid item sx={{ py: "1em", backgroundColor: "secondary.main" }}>
          <Link
            href={
              "https://www.facebook.com/nocturnal.demons.events?locale=de_DE"
            }
          >
            <FacebookIcon
              sx={{ color: "white", width: "1.5em", height: "1.5em" }}
            ></FacebookIcon>
          </Link>
          <Link href={"https://www.instagram.com/nocturnal.demons/"}>
            <InstagramIcon
              sx={{ color: "white", width: "1.5em", height: "1.5em" }}
            ></InstagramIcon>
          </Link>
        </Grid>
        <Grid item>
          <Grid
            container
            sx={{
              justifyContent: "center",
              gap: "0.5em",
              backgroundColor: "secondary.main",
              pb: "1em",
            }}
          >
            <img
              src={"/images/flags/deutschland.webp"}
              alt={"Nocturnal Demons"}
              style={{ width: "2em", height: "2em" }}
              onClick={changeToDe}
              loading="lazy"
            />
            <img
              src={"/images/flags/grossbritannien.webp"}
              alt={"Nocturnal Demons"}
              style={{ width: "2em", height: "2em" }}
              onClick={changeToEn}
              loading="lazy"
            />
            <img
              src={"/images/flags/czech.webp"}
              alt={"Nocturnal Demons"}
              style={{ width: "2em", height: "2em" }}
              onClick={changeToCz}
              loading="lazy"
            />
            <img
              src={"/images/flags/poland.webp"}
              alt={"Nocturnal Demons"}
              style={{ width: "2em", height: "2em" }}
              onClick={changeToPl}
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
