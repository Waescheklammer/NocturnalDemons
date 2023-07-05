import React, { useEffect } from "react";
import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import { ContentText } from "../../../components/ContentText";
import { useTranslation } from "react-i18next";
import { changeBgc } from "../../../util/utils";

export const Imprint = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const { t } = useTranslation("imprint");
  const theme = useTheme();

  useEffect(() => {
    matches
      ? changeBgc(theme.palette.primary.dark)
      : changeBgc(theme.palette.secondary.main);
  }, [matches]);

  return (
    <Box
      sx={{
        mx: matches ? "0.5em" : "10em",
        my: matches ? "1em" : "2em",
        minHeight: matches ? "100vh" : "80vh",
      }}
    >
      <Box sx={{ border: "1px solid white", mb: "0.5em" }}>
        <ContentText variant={"h4"}>{t("imprint")}</ContentText>
      </Box>
      <Box
        sx={{
          border: "1px solid white",
          minHeight: matches ? "85vh" : "65vh",
          py: "1em",
          px: matches ? "1em" : "5em",
          textAlign: "left",
          color: "white",
        }}
      >
        <Typography variant={"h5"}>{t("tmg")}</Typography>
        <Typography variant={"subtitle1"}>
          Justin Günther <br /> Dieselstraße 34 <br />
          01257 Dresden
        </Typography>
        <br />
        <Typography variant={"h5"}>{t("contact")}</Typography>
        <Typography variant={"subtitle1"}>
          nocturnaldemons444@gmail.com
        </Typography>
        <br />
        <Typography variant={"h5"}>{t("content")}</Typography>
        <Typography variant={"subtitle1"}>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich.
        </Typography>
        <br />
        <Typography variant={"h5"}>{t("links")}</Typography>
        <Typography variant={"subtitle1"}>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </Typography>
        <br />
        <Typography variant={"h5"}>{t("validity")}</Typography>
        <Typography variant={"subtitle1"}>
          Dieses Impressum gilt auch für unsere Angebote auf den Social Media
          Plattformen Instagram und Facebook
        </Typography>
      </Box>
    </Box>
  );
};
