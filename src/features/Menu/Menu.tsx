import { Box, Grid, styled, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { GlitchTypography } from "../../components/GlitchTypography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import i18n from "../../i18n";
import { Lang } from "../../data/enums/Lang";

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
  const [lang, setLang] = useState<string>(
    localStorage.getItem("lng") || Lang.de
  );

  const items = [
    { title: "event", link: "" },
    { title: "tickets", link: "tickets" },
    { title: "location", link: "location" },
    { title: "contact", link: "contact" },
    { title: "gallery", link: "gallery" },
    { title: "privacy", link: "privacy" },
    { title: "imprint", link: "imprint" },
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

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "secondary.main",
        zIndex: "2",
        transition: "margin-top 1s ease-in",
      }}
    >
      <Grid>
        <Grid
          item
          sx={{
            minHeight: "4.5em",
            display: "flex",
            justifyContent: "flex-start",
            pl: "0.5em",
            pt: "0.8em",
          }}
        >
          <img
            src={"/textless.png"}
            alt={"Nocturnal Demons Head"}
            style={{ width: "5em", height: "3em" }}
          />
        </Grid>
        {items.map((item) => (
          <MenuItem item key={item.title}>
            <Link
              href={"/" + item.link}
              sx={{
                textDecoration: "none",
                textTransform: "uppercase",
                color: "#090404",
                "&:active": {
                  color: "secondary.light",
                },
              }}
            >
              <GlitchTypography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {t(item.title)}
                </Typography>
              </GlitchTypography>
            </Link>
          </MenuItem>
        ))}
        <Grid item sx={{ pt: "1em" }}>
          <Link href={"https://facebook.com"}>
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
          <Grid container sx={{ justifyContent: "center", gap: "0.5em" }}>
            <img
              src={"/deutschland.png"}
              alt={"Nocturnal Demons"}
              style={{ width: "2em", height: "2em" }}
              onClick={changeToDe}
            />
            <img
              src={"/grossbritannien.png"}
              alt={"Nocturnal Demons"}
              style={{ width: "2em", height: "2em" }}
              onClick={changeToEn}
            />
            <img
                src={"/czech.png"}
                alt={"Nocturnal Demons"}
                style={{ width: "2em", height: "2em" }}
                onClick={changeToEn}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
