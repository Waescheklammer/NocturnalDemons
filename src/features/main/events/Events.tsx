import React, {useState} from "react";
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
  const matchesBig = useMediaQuery("(min-width:1500px)");
  const fontColor = "secondary.light";
  const [countdown, setCountdown] = useState<String>();

  const countDownDate = new Date("Sep 16, 2023 22:00:00").getTime();

  let timer = setInterval(function() {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownString = days +"Days " +hours +"h " +minutes +"min " +seconds +"s"
      setCountdown(countdownString)

        if (distance < 0) {
            clearInterval(timer);
        }
    }, 1000);

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
            {matchesPhone && (
                <img
                    src={"/images/logo/logo.webp"}
                    alt={"Nocturnal Demons"}
                    style={{
                        width: "70%",
                        marginTop: "5em",
                        height: "30vh",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                />
            )}
                <Grid container sx={{py: "10em"}}>
                    <ContentText sx={{mx: "auto"}}>
                        {t("seeya")}
                    </ContentText>
                </Grid>
        </Grid>
    </Box>
  );
};

/*
<Grid container>
        {!matchesPhone ? (
          <Grid item xs={12} md={6}>
            <img
              src={events.imgPromo}
              alt={"Nocturnal Demons"}
              style={{ width: "100%", height: "100%", minHeight: "80vh" }}
            />
          </Grid>
        ) : (
          <img
            src={"/images/logo/logo.webp"}
            alt={"Nocturnal Demons"}
            style={{
              width: "70%",
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
                variant={matchesPhone ? "h2" : matchesBig ? "h2" : "h3"}
                sx={{
                  mt: matchesBig ? "4em" : "1em",
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
              <ContentText
                variant={matchesBig ? "h2" : "h3"}
                sx={{ mt: "1em", color: fontColor }}
              >
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
                      size={matchesBig ? "large" : "medium"}
                      variant={"outlined"}
                    >
                      {t("tickets")}
                    </ContentButton>
                  </RouterLink>
                </GlitchTypography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "13em",
                  mx: "auto",
                  mt: matchesBig ? "2em" : "1em",
                  mb: "4em",
                }}
              >
                <GlitchTypography>
                  <RouterLink to={"details"}>
                    <ContentButton
                      sx={{
                        color: fontColor,
                        border: matchesPhone
                          ? "2px solid" + fontColor
                          : "1px solid" + fontColor,
                      }}
                      size={matchesBig ? "large" : "medium"}
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
 */