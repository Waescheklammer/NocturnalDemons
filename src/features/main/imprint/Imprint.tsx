import React, { useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ContentText } from "../../../components/ContentText";
import { useTranslation } from "react-i18next";
import { changeBgc } from "../../../util/utils";

export const Imprint = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const { t} = useTranslation("imprint");
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
        mt: matches ? "1em" : "2em",
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
          pt: "1em",
        }}
      >
        <ContentText variant={"h5"}>{t("tmg")}</ContentText>
        <ContentText variant={"h5"}>{t("represent")}</ContentText>
        <ContentText variant={"h5"}>{t("contact")}</ContentText>
        <ContentText variant={"h5"}>{t("content")}</ContentText>
        <ContentText variant={"h5"}>{t("links")}</ContentText>
        <ContentText variant={"h5"}>{t("validity")}</ContentText>
      </Box>
    </Box>
  );
};
