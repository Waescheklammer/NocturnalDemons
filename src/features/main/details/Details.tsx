import React, {useCallback, useState} from "react";
import { Box, Grid, styled, useMediaQuery, useTheme } from "@mui/material";
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
import InstagramIcon from "@mui/icons-material/Instagram";
import { ScrollButton } from "../../../components/ScrollButton";
import LaunchIcon from "@mui/icons-material/Launch";
import ImageViewer from "react-simple-image-viewer";

const DetailsLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.light,
  textDecoration: "none",
  transition: "0.3s",
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.primary.main,
  },
}));

export const Details = () => {
  const { t } = useTranslation("details");
  const theme = useTheme();
  const matchesPhone = useMediaQuery("(max-width:600px)");
  const matchesTablet = useMediaQuery("(max-width:810px)");

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = lineUpData.stages.map(stage => stage.timetable)

  changeBgc(theme.palette.secondary.main);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <Box
      sx={{
        mb: "1em",
        backgroundColor: "secondary.main",
        minHeight: "86vh",
      }}
    >
      {!matchesPhone && <ScrollButton></ScrollButton>}
      <Box sx={{ mb: "3em" }}>
        {matchesPhone ? (
          <img
            src={events.imgPromo}
            alt={"Nocturnal Demons"}
            style={{
              width: "100%",
              height: "70vh",
              marginTop: "15vh",
              marginBottom: "15vh",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        ) : (
          <img
            src={events.imgCover}
            alt={"Nocturnal Demons"}
            style={{
              width: "100%",
              height: matchesTablet ? "94vh" : "80vh",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        )}
      </Box>
      <Box sx={{ mb: "5em", maxWidth: "25em", mx: "auto" }}>
        <Link to={events.ticketLink}>
          <GlitchTypography>
            <ContentButton
              sx={{
                fontWeight: "bolder",
                width: matchesPhone ? "15em" : "25em",
              }}
              size={"large"}
              variant={"outlined"}
            >
              {t("tickets")}
            </ContentButton>
          </GlitchTypography>
        </Link>
      </Box>
      <Box
        sx={{
          mx: matchesPhone ? "1em" : "5em",
          mb: "3em",
          py: "2em",
          border: "1px solid white",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <ContentText
              variant={"h4"}
              sx={{
                mb: "0.5em",
                color: !matchesPhone ? "primary.main" : "#883CC0",
              }}
            >
              {events.name} 18+
            </ContentText>
            <ContentText variant={"h6"} sx={{ mb: "1em" }}>
              {events.genre}
            </ContentText>
            <ContentText variant={"h6"} sx={{ mb: "2.5em" }}>
              26 DJs
            </ContentText>
            <ContentText variant={"h5"} sx={{ mb: "1em", fontWeight: "bolder" }}>
              {events.date}
            </ContentText>
            <ContentText variant={"h5"} sx={{ mb: "2.5em", fontWeight: "bolder"  }}>
              {events.timeStart} - {events.timeEnd}
            </ContentText>
            <ContentText
              variant={"h4"}
              sx={{
                mb: "1em",
                color: !matchesPhone ? "primary.main" : "#883CC0",
              }}
            >
              {t("location")}
            </ContentText>
            <ContentText variant={"h5"} sx={{ mb: "0.5em" }}>
              {events.locationFull}
            </ContentText>
            <ContentText variant={"subtitle2"} sx={{ mb: "3em" }}>
              {events.address}
            </ContentText>
            <Box sx={{ mb: "4em" }}>
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
              sx={{
                mb: "0.5em",
                color: !matchesPhone ? "primary.main" : "#883CC0",
              }}
            >
              {t("lineup")}
            </ContentText>
            {lineUpData.stages.map((stage, index) => (
              <Box key={stage.name}>
                <ContentText
                    variant={"h6"}
                    sx={{
                      mb: "0.5em",
                      mt: "0.5em",
                      color: !matchesPhone ? "#901317" : "#512D75",
                      textAlign: "center",
                      mx: "auto",
                    }}
                >
                  {stage.name} Floor
                </ContentText>
                <ContentText
                  variant={"subtitle1"}
                  sx={{
                    mb: "0.5em",
                    mt: "0.5em",
                    color: !matchesPhone ? "primary.dark" : "#512D75",
                    textAlign: "center",
                    width: "10em",
                    mx: "auto",
                    "&:hover": {
                      cursor: "pointer"
                    }
                  }}
                  onClick={() => openImageViewer(index)}
                >
                  <Grid container>
                    <Grid item xs={8}>
                      {t("timetable")}
                    </Grid>
                    <Grid item xs={1}>
                      <LaunchIcon></LaunchIcon>
                    </Grid>
                  </Grid>
                </ContentText>
                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                    />
                )}
                {stage.acts.map((act) => (
                  <Grid
                    container
                    sx={{ width: "60%", mx: "auto" }}
                    key={act.name}
                  >
                    <Grid item xs={4}>
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
                        {act.time}
                      </ContentText>
                    </Grid>
                    <Grid item xs={8}>
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
      <ContentText
        sx={{ color: !matchesPhone ? "primary.main" : "#883CC0", mb: "2em" }}
        variant={"h4"}
      >
        {t("acts")}
      </ContentText>
      <Box>
        <Grid
          container
          sx={{ justifyContent: "center", gap: "2em", mb: "5em" }}
        >
          {acts.map((act, id) => (
            <Grid
              item
              xs={6}
              md={3}
              key={id}
              sx={{
                border: "1px solid",
                borderColor: !matchesPhone ? "primary.dark" : "#883CC0",
                minHeight: "250px",
              }}
            >
              {act?.img.length > 0 ? (
                <Box key={act.name} sx={{ pb: "1em" }}>
                  <img
                    src={act.img}
                    alt={act.name}
                    style={{ width: "100%" }}
                    loading="lazy"
                  />
                  <ContentText variant={"subtitle1"}>
                    Genre - {act.genre}
                  </ContentText>
                  {act.label.length > 0 && (
                    <ContentText variant={"subtitle1"}>
                      Label - {act.label}
                    </ContentText>
                  )}
                  <ContentText variant={"subtitle1"}>
                    {act.city} - {act.nationality}
                  </ContentText>
                  <DetailsLink to={act.instagramLink}>
                    <InstagramIcon />
                  </DetailsLink>
                  {act.soundcloudLink.length > 0 && (
                    <DetailsLink to={act.soundcloudLink}>
                      <img
                        src={"/images/logo/soundcloud.webp"}
                        alt={"Nocturnal Demons"}
                        style={{ width: "1.5em" }}
                        loading="lazy"
                      />
                    </DetailsLink>
                  )}
                </Box>
              ) : (
                <ContentText variant={"h6"} sx={{ my: "40%" }} key={act.name}>
                  TBA
                </ContentText>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
