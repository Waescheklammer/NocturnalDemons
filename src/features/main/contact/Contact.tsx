import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { ContentText } from "../../../components/ContentText";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const matches = useMediaQuery("(max-width:900px)");
  const matchesBig = useMediaQuery("(min-width:1500px)");
  const { t } = useTranslation("contact");

  return (
    <Grid container>
      {matches ? (
        <Grid item xs={12} sx={{ minHeight: "100vh" }}>
          <ContentText
            sx={{
              position: "absolute",
              textAlign: "center",
              width: "100%",
              top: "40%",
              fontWeight: "900",
              color: "primary.main",
            }}
            variant={"h2"}
          >
            {t("who")}
            <br />
            {t("nocturnalDemons")}
          </ContentText>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <img
            src={"/images/logo/contactCover.webp"}
            alt={"Nocturnal Demons"}
            style={{
              width: "100%",
              height: matches ? "100vh" : "90vh",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <ContentText
            sx={{
              position: "absolute",
              textAlign: "center",
              width: "100%",
              top: "40%",
              fontWeight: "900",
            }}
            variant={"h1"}
          >
            {t("who")}
            <br />
            {t("nocturnalDemons")}
          </ContentText>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sx={{
          minHeight: matchesBig ? "60vh" : "100vh",
          py: matchesBig ? "10em" : "5em",
        }}
      >
        <Typography
          sx={{ mx: matches ? "15vw" : "20vw" }}
          variant={matches ? "subtitle1" : "h5"}
        >
          <b>Nocturnal Demons</b> {t("paragraph1")}
          <br />
          <br />
          <br />
          {t("paragraph3")}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "secondary.main",
          minHeight: "100vh",
          py: "5em",
        }}
      >
        <ContentText variant={"h4"} sx={{ mb: "1em" }}>
          {t("team")}
        </ContentText>
        <img
          src={"/images/logo/logo.webp"}
          alt={"Nocturnal Demons"}
          style={{ height: "10em" }}
          loading="lazy"
        />
        <Grid container sx={{ width: "70%", mx: "auto" }}>
          {leaders.map((leader) => (
            <Grid item xs={6} md={3} sx={{ mt: "1em" }} key={leader}>
              <ContentText
                variant={"h5"}
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                {leader}
              </ContentText>
            </Grid>
          ))}
          {members.map((member) => (
            <Grid item xs={6} md={3} sx={{ mt: "1em" }} key={member}>
              <ContentText variant={"h5"}>{member}</ContentText>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ height: "60vh", pt: "5em" }}>
        <ContentText sx={{ color: "black", mb: "2em" }} variant={"h4"}>
          Kontakt
        </ContentText>
        <Typography>Leon Gashi</Typography>
        <Typography sx={{ mb: "1em" }}>
          <a
            href={"mailto:nocturnaldemons444@gmail.com"}
            style={{ color: "black", textDecoration: "none" }}
          >
            nocturnaldemons444@gmail.com
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
};

const leaders = ["Gashi", "Kosta", "Robin", "Matze", "Nico"];

const members = [
  "Justin",
  "Luxn",
  "Krissy",
  "Nelly",
  "Emi",
  "Franka",
  "Caro",
  "Miro",
  "Susi",
  "Nadine",
  "Dani",
  "Kurt",
  "Alex",
  "Jona",
  "Natti",
  "Anna"
];
