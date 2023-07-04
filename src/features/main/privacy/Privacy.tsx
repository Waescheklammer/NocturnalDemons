import React, { useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { changeBgc } from "../../../util/utils";
import { ContentText } from "../../../components/ContentText";

export const Privacy = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const { t} = useTranslation("privacy");
  const theme = useTheme();

  changeBgc(theme.palette.secondary.main)

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
              color: "white"
            }}
        >
          <ContentText>Blahblubsdududu</ContentText>
        </Box>
      </Box>
  );
};
