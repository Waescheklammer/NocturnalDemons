import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { GlitchTypography } from "../../../components/GlitchTypography";
import { Link } from "react-router-dom";
import { changeBgc } from "../../../util/utils";
import { ContentButton } from "../../../components/ContentButton";
import NearMeIcon from "@mui/icons-material/NearMe";
import { lineUpData } from "../../../data/eventinfo/LineUpData";
import { acts } from "../../../data/eventinfo/Acts";
import { events } from "../../../data/eventinfo/Event";
import { ContentText } from "../../../components/ContentText";

export const Details = () => {
  const { t } = useTranslation("details");
  const theme = useTheme();
  const matchesPhone = useMediaQuery("(max-width:600px)");
  const matchesTablet = useMediaQuery("(max-width:810px)");
  const [scrollToTop, setScrollToTop] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setScrollToTop(false)
  }, [scrollToTop])

  const handleScrolling = () => {
    setScrollToTop(true)
  }

  changeBgc(theme.palette.secondary.main);

  return (
    <Box
      sx={{
        mb: "1em",
        backgroundColor: "secondary.main",
        minHeight: "86vh",
      }}
    >
      <Box sx={{ mb: "3em" }}>
        <img
          src={events.imgCover}
          alt={"Nocturnal Demons"}
          style={{
            width: "100%",
            height: matchesPhone ? "100vh" : matchesTablet ? "94vh" : "80vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </Box>
      <Box sx={{ mb: "5em", maxWidth: '25em', mx: 'auto' }}>
            <Link to={events.ticketLink}>
              <GlitchTypography>
                <ContentButton
                    sx={{ fontWeight: "bolder", width: matchesPhone ? '15em' : '25em' }}
                    size={"large"}
                    variant={"outlined"}
                >
                  {(t("tickets"))}
                </ContentButton>
              </GlitchTypography>
            </Link>
      </Box>
      <Box
        sx={{
          mx: matchesPhone ? "1.5em" : "5em",
          mb: "3em",
          py: "2em",
          border: "1px solid white",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <ContentText
              variant={"h4"}
              sx={{ mb: "0.5em", color: "primary.main" }}
            >
              {events.name}
            </ContentText>
            <ContentText variant={"h6"} sx={{ mb: "2.5em" }}>
              {events.genre}
            </ContentText>
            <ContentText variant={"h5"} sx={{ mb: "1em" }}>
              {events.date}
            </ContentText>
            <ContentText variant={"h5"} sx={{ mb: "2.5em" }}>
              {events.timeStart} - {events.timeEnd}
            </ContentText>
            <ContentText
              variant={"h4"}
              sx={{ mb: "1em", color: "primary.main" }}
            >
              {t("location")}
            </ContentText>
            <ContentText variant={"h5"} sx={{ mb: "0.5em" }}>
              {events.locationFull}
            </ContentText>
            <ContentText variant={"subtitle2"} sx={{ mb: "3em" }}>
              {events.address}
            </ContentText>
            <Box sx={{mb: '4em'}}>
              <Link to={events.mapLink}>
                <GlitchTypography>
                  <ContentButton
                      sx={{ gap: "0.5em" }}
                      size={"medium"}
                      variant={"outlined"}
                  >
                    {t("map")}
                    <NearMeIcon></NearMeIcon>
                  </ContentButton>
                </GlitchTypography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentText
              variant={"h4"}
              sx={{ mb: "0.5em", color: "primary.main" }}
            >
              {t("lineup")}
            </ContentText>
            {lineUpData.stages.map((stage) => (
              <Box key={stage.name}>
                <ContentText
                  variant={"h6"}
                  sx={{ mb: "0.5em", mt: "0.5em", color: "primary.dark" }}
                >
                  {stage.name} Floor
                </ContentText>
                {stage.acts.map((act) => (
                  <Grid
                    container
                    sx={{ width: "60%", mx: "auto" }}
                    key={act.name}
                  >
                    <Grid item xs={6}>
                      <ContentText>{act.time}</ContentText>
                    </Grid>
                    <Grid item xs={6}>
                      <ContentText
                        variant={
                          lineUpData.headliners.includes(act.name)
                            ? "subtitle1"
                            : "subtitle2"
                        }
                        sx={{
                          fontWeight: lineUpData.headliners.includes(act.name)
                            ? "bold"
                            : "normal",
                        }}
                      >
                        {act.name}
                      </ContentText>
                    </Grid>
                  </Grid>
                ))}
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
      <ContentText sx={{ color: "primary.main", mb: "2em" }} variant={"h4"}>
        {t("acts")}
      </ContentText>
      <Box>
        <Grid
          container
          sx={{ justifyContent: "center", gap: "2em", mb: "5em" }}
        >
          {acts.map((a) => (
            <Grid item xs={6} md={3} key={a.name}>
              <img
                src={"/nostromo3.jpg"}
                alt={"Nocturnal Demons"}
                style={{ width: "80%" }}
              />
              <ContentText variant={"h5"}>{a.name}</ContentText>
              <ContentText variant={"subtitle1"}>
                {a.nationality} {a.city}
              </ContentText>
            </Grid>
          ))}
        </Grid>
        <Button onClick={handleScrolling} variant={'outlined'} sx={{position: 'fixed', ml: '90vw', mt: '10vh', zIndex: '9999'}}>GUSCHEGOO</Button>
      </Box>
    </Box>
  );
};
