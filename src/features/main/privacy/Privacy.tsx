import React, { useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { changeBgc } from "../../../util/utils";
import { ContentText } from "../../../components/ContentText";

export const Privacy = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const { t } = useTranslation("privacy");
  const theme = useTheme();

  changeBgc(theme.palette.secondary.main);

  const link1 =
    "https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/";
  const link2 = "https://aws.amazon.com/de/privacy/?nc1=f_pr";

  return (
    <Box
      sx={{
        mx: matches ? "0.5em" : "10em",
        my: matches ? "1em" : "2em",
        minHeight: matches ? "100vh" : "80vh",
      }}
    >
      <Box sx={{ border: "1px solid white", mb: "0.5em" }}>
        <ContentText variant={"h4"}>{t("title")}</ContentText>
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
        <ContentText variant={"h6"}>{t("common")}</ContentText>
        <br />
        <ContentText variant={"subtitle2"}>{t("paragraph1")}</ContentText>
        <ContentText variant={"subtitle2"}>{t("paragraph2")}</ContentText>
        <br />
        <ContentText variant={"h6"}>{t("hoster")}</ContentText>
        <br />
        <ContentText variant={"subtitle2"}>{t("paragraph3")}</ContentText>
        <br />
        <a href={link1}>{link1}</a>
        <br />
        <br />
        <ContentText variant={"subtitle2"}>{t("following")}</ContentText>
        <br />
        <a href={link2}>{link2}</a>
        <br />
        <br />
        <ContentText variant={"subtitle2"}>{t("paragraph4")}</ContentText>
        <br />
        <ContentText variant={"h6"}>{t("evilStates")}</ContentText>
        <br />
        <ContentText variant={"subtitle2"}>{t("paragraph5")}</ContentText>
        <br />
        <ContentText variant={"h6"}>{t("rights")}</ContentText>
        <br />
        <ContentText variant={"subtitle2"}>{t("paragraph6")}</ContentText>
        <ul>
          <li>
            <ContentText variant={"subtitle2"}>{t("right1")}</ContentText>
          </li>
          <li>
            <ContentText variant={"subtitle2"}>{t("right2")}</ContentText>
          </li>
          <li>
            <ContentText variant={"subtitle2"}>{t("right3")}</ContentText>
          </li>
          <li>
            <ContentText variant={"subtitle2"}>{t("right4")}</ContentText>
          </li>
          <li>
            <ContentText variant={"subtitle2"}>{t("right5")}</ContentText>
          </li>
        </ul>
        <br />
        <ContentText variant={"subtitle2"}>{t("right6")}</ContentText>
        <br />
        <br />
        <ContentText variant={"subtitle2"}>{t("last")} </ContentText>
        <br />
        <ContentText variant={"subtitle1"} sx={{ mb: "2em" }}>
          nocturnaldemons444@gmail.com
        </ContentText>
      </Box>
    </Box>
  );
};
