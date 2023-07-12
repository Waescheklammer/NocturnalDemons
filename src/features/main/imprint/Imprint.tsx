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
          Wir haben die Inhalte unserer Seiten mit größtmöglicher Sorgfalt erstellt.
          Gemäß § 7 Abs.1 TMG sind wir als Diensteanbieter für die eigenen Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        </Typography>
        <br />
        <Typography variant={"h5"}>{t("links")}</Typography>
        <Typography variant={"subtitle1"}>
          In unserem Angebot finden sich Verknüpfungen zu externen Webseiten von Dritten.
          Wir haben keinerlei Einfluss auf den Inhalt dieser Seiten und können daher keinerlei Gewähr dafür übernehmen.
          Für die Inhalte der verlinkten Seiten ist ausschließlich der jeweilige Anbieter oder Betreiber verantwortlich.
          Zum Zeitpunkt der Verlinkung wurden die verknüpften Seiten sorgfältig auf mögliche Verstöße gecheckt,
          jedoch waren etwaige illegale Inhalte nicht ersichtlich.
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne klare Anzeichen für eine Rechtsverletzung unzumutbar.
          Sollten uns Verstöße bekannt werden, werden wir sofortige Maßnahmen ergreifen und diese Verknüpfungen entfernen.
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
