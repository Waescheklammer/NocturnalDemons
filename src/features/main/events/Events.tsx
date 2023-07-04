import React from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { GlitchTypography } from "../../../components/GlitchTypography";
import { Link as RouterLink } from "react-router-dom";
import { ContentButton } from "../../../components/ContentButton";
import { events } from "../../../data/eventinfo/Event";
import { ContentText } from "../../../components/ContentText";

export const Events = () => {
  const { t } = useTranslation("events");
  const matchesPhone = useMediaQuery("(max-width:600px)");
  const matchesTablet = useMediaQuery("(max-width:810px)");
  const fontColor = "secondary.light";

  return (
    <Box
      sx={{
        mx: matchesPhone ? "0em" : matchesTablet ? "2em" : "10em",
        mt: matchesPhone ? "0em" : "2em",
        mb: matchesPhone ? "0em" : "2em",
        backgroundColor: "secondary.main",
        minHeight: matchesPhone ? "100vh" : "80vh",
      }}
    >
      <Grid container>
        {!matchesPhone ? (
          <Grid item xs={12} md={6}>
            <img
              src={events.imgPromo}
              alt={"Nocturnal Demons"}
              style={{ width: "100%", height: "100%", minHeight: "80vh"}}
            />
          </Grid>
        ) : (
          <img
            src={"/images/logo/logo.png"}
            alt={"Nocturnal Demons"}
            style={{
              width: "80%",
              marginTop: "5em",
              height: "30vh",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        )}
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12}>
              <ContentText
                variant={matchesPhone ? "h2" : "h3"}
                sx={{
                  mt: "1em",
                  borderTop: "2px solid " + fontColor,
                  borderBottom: "2px solid " + fontColor,
                  color: matchesPhone ? "primary.main" : fontColor,
                }}
              >
                  {matchesPhone ? (
                      <>{events.name}</>
                  ) : (
                      <>{events.locationShort}</>
                  )}
              </ContentText>
            </Grid>
            <Grid item xs={12}>
              <ContentText variant={"h3"} sx={{ mt: "1em", color: fontColor }}>
                {events.date}
              </ContentText>
            </Grid>
            <Grid item xs={12}>
              <ContentText
                variant={"h6"}
                sx={{ mt: "0.5em", color: fontColor }}
              >
                {"| " + events.genre + " |"}
              </ContentText>
            </Grid>
            {matchesPhone && (
                <Grid item xs={12}>
                    <ContentText
                        variant={"h6"}
                        sx={{ mt: "2em", color: fontColor }}
                    >
                        {events.locationShort}
                    </ContentText>
                </Grid>
            )}
            <Grid item xs={12}>
              <Box sx={{ width: "13em", mt: "6em", mx: "auto" }}>
                <GlitchTypography>
                  <RouterLink to={events.ticketLink}>
                    <ContentButton
                      sx={{
                        color: fontColor,
                        border: matchesPhone
                          ? "2px solid" + fontColor
                          : "1px solid" + fontColor,
                      }}
                      size={"medium"}
                      variant={"outlined"}
                    >
                      {t("tickets")}
                    </ContentButton>
                  </RouterLink>
                </GlitchTypography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ width: "13em", mx: "auto", mt: "1em", mb: "4em" }}>
                <GlitchTypography>
                  <RouterLink to={"details"}>
                    <ContentButton
                      sx={{
                        color: fontColor,
                        border: matchesPhone
                          ? "2px solid" + fontColor
                          : "1px solid" + fontColor,
                      }}
                      size={"medium"}
                      variant={"outlined"}
                    >
                      {t("info")}
                    </ContentButton>
                  </RouterLink>
                </GlitchTypography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
