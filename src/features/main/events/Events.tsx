import React, { useEffect, useState } from "react";
import { Box, Grid, Link, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { GlitchTypography } from "../../../components/GlitchTypography";
import { Link as RouterLink } from "react-router-dom";
import { ContentButton } from "../../../components/ContentButton";
import { events } from "../../../data/eventinfo/Event";
import { ContentText } from "../../../components/ContentText";

export const Events = () => {
  const { t, i18n } = useTranslation("events");
  const matchesPhone = useMediaQuery("(max-width:600px)");
  const matchesTablet = useMediaQuery("(max-width:810px)");
  const [fontColor, setFontColor] = useState<string>();

  useEffect(() => {
    const color: string = matchesPhone ? "#E0E0E0" : "#E0E0E0";
    setFontColor(color);
  }, [matchesPhone]);

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
              style={{ width: "100%", height: matchesPhone ? "100vh" : "80vh" }}
            />
          </Grid>
        ) : (
          <img
            src={"/logo.png"}
            alt={"Nocturnal Demons"}
            style={{
              width: "80%",
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
                variant={"h3"}
                sx={{
                  mt: "1em",
                  borderTop: "2px solid " + fontColor,
                  borderBottom: "2px solid " + fontColor,
                  color: fontColor,
                }}
              >
                {events.locationShort}
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
            <Grid item xs={12}>
                <Box sx={{width: '13em', mt: '6em', mx: 'auto'}}>
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
              <Box sx={{width: '13em', mx: 'auto', mt: '1em', mb: "4em",}}>
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
