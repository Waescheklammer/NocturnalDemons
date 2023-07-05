import React from "react";
import { Box, Grid, styled, Typography, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { GlitchTypography } from "../../components/GlitchTypography";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.light,
  textDecoration: "none",
  width: "5em",
  transition: "0.3s",
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.primary.main,
  },
}));

export const Footer = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const { t } = useTranslation("footer");

  return (
    <Grid
      sx={{
        width: "100%",
        borderTop: "3px solid #b5181e",
        pt: "2em",
        pb: "1em",
        backgroundColor: "secondary.main",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={12}>
          <FooterLink to="https://www.facebook.com/nocturnal.demons.events?locale=de_DE">
            <FacebookIcon />
          </FooterLink>
          <FooterLink to="https://www.instagram.com/nocturnal.demons/">
            <InstagramIcon />
          </FooterLink>
        </Grid>
        <Grid item xs={12} md={4}>
          {matches ? (
            <img
              src={"/images/logo/text.png"}
              alt={"Nocturnal Demons"}
              style={{ height: "5em" }}
              loading="lazy"
            />
          ) : (
            <img
              src={"/images/logo/logo.png"}
              alt={"Nocturnal Demons"}
              style={{ height: "10em" }}
              loading="lazy"
            />
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container sx={{ color: "secondary.light" }}>
            <Grid item xs={12} md={6} sx={{ mx: "auto" }}>
              <Typography
                variant={"h5"}
                sx={{
                  mb: matches ? "0.5em" : "1em",
                  mt: matches ? "1em" : "0em",
                }}
              >
                {t("contact")}
              </Typography>
              <Typography variant={"subtitle2"} sx={{ mb: "0.5em" }}>
                Leon Gashi
              </Typography>
              <Typography variant={"subtitle2"} sx={{ mb: "1em" }}>
                <a
                  href={"mailto:nocturnaldemons444@gmail.com"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  nocturnaldemons444@gmail.com
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              {!matches && (
                <Typography variant={"h5"} sx={{ mb: "1em" }}>
                  {t("info")}
                </Typography>
              )}
              <Grid container>
                <Grid item xs={12}>
                  <Box sx={{ width: "5em", mx: "auto", mb: "0.5em" }}>
                    <FooterLink to={"/privacy"}>
                      <GlitchTypography>
                        <Typography variant={"subtitle2"}>
                          {t("privacy")}
                        </Typography>
                      </GlitchTypography>
                    </FooterLink>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ width: "5em", mx: "auto" }}>
                    <FooterLink to={"/imprint"}>
                      <GlitchTypography>
                        <Typography variant={"subtitle2"}>
                          {t("imprint")}
                        </Typography>
                      </GlitchTypography>
                    </FooterLink>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            sx={{ color: "secondary.dark", mt: "3em", fontSize: "11px" }}
          >
            © Copyright 2023 nocturnal-demons.de
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
