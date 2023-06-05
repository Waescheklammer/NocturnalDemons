import React from "react";
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { GlitchTypography } from "../../../components/GlitchTypography";
import { Link } from "react-router-dom";
import { ContentButton } from "../../../components/ContentButton";
import { events } from "../../../eventinfo/Event";

const ContentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  textTransform: "uppercase",
}));

export const Events = () => {
  const { t, i18n } = useTranslation("events");

  const changeLang = () => {
    i18n.changeLanguage("de");
  };
  return (
    <Box
      sx={{
        mx: "10em",
        my: "2em",
        backgroundColor: "secondary.main",
        minHeight: "80vh",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <img
            src={events.imgPromo}
            alt={"Nocturnal Demons"}
            style={{ width: "100%", height: "80vh" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <ContentText
                variant={"h3"}
                sx={{ mt: "1em", borderTop: "1px solid #E0E0E0", borderBottom: "1px solid #E0E0E0" }}
                onClick={changeLang}
              >
                {events.locationShort}
              </ContentText>
            </Grid>
            <Grid item xs={12}>
              <ContentText variant={"h3"} sx={{ mt: "1em" }}>
                {events.date}
              </ContentText>
            </Grid>
            <Grid item xs={12}>
              <ContentText variant={"h6"} sx={{ mt: "0.5em"}}>
                {"| " +events.genre +" |"}
              </ContentText>
            </Grid>
            <Grid item xs={12}>
              <GlitchTypography>
                <Link to={events.ticketLink}>
                  <ContentButton
                    sx={{ mt: "5em" }}
                    size={"medium"}
                    variant={"outlined"}
                  >
                    Tickets
                  </ContentButton>
                </Link>
              </GlitchTypography>
            </Grid>
            <Grid item xs={12}>
              <GlitchTypography>
                <Link to={"details"}>
                  <ContentButton
                    sx={{ mt: "1em" }}
                    size={"medium"}
                    variant={"outlined"}
                  >
                    Info
                  </ContentButton>
                </Link>
              </GlitchTypography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
