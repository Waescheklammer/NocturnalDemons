import React, { useEffect } from "react";
import { Box, Button, Grid, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { GlitchTypography } from "../../../components/GlitchTypography";
import { Link } from "react-router-dom";
import { changeBgc } from "../../../util/utils";
import { ContentButton } from "../../../components/ContentButton";
import NearMeIcon from '@mui/icons-material/NearMe';
import { events } from "../../../eventinfo/Event";

const ContentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  textTransform: "uppercase",
}));

export const Details = () => {
  const { t } = useTranslation("details");
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:600px)");

  const lineupText = [
      "BEA",
      "GUSCHN",
      "BRUNO",
      "FEUERGALLER",
      "VINCE",
      "DJ DIESEL",
      "CHARLOTTE DE WITTE",
      "AMELIE LENS",
      "KLANGKÜNSTLER",
      "TERRIFYING",
      "KINOKO",
      "SCHMUTZ",
      "DIVERSE ANDERE",
      "KINDERFICKER"
  ]

  changeBgc(theme.palette.secondary.main)

  return (
    <Box
      sx={{
        mb: "1em",
        backgroundColor: "secondary.main",
        minHeight: "86vh",
      }}
    >
        <Box sx={{mb: '2em'}}>
            <img
                src={events.imgCover}
                alt={"Nocturnal Demons"}
                style={{ width: "100%", height: matches ? "100vh" : "80vh", backgroundPosition: 'center', backgroundSize: 'cover' }
                }
            />
        </Box>
        <Box sx={{mb: '5em'}}>
            <Link to={events.ticketLink}>
                <GlitchTypography>
                    <ContentButton
                        sx={{ mt: '2em', width: '25em', fontWeight: 'bolder' }}
                        size={"large"}
                        variant={"outlined"}
                    >
                        TICKETS
                    </ContentButton>
                </GlitchTypography>
            </Link>
        </Box>
        <Box  sx={{mx: '5em', mb: '3em', py: '2em', border: '1px solid white'}}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <ContentText variant={"h4"} sx={{mb: '0.5em', color: 'primary.dark'}}>{events.name}</ContentText>
                    <ContentText variant={"h6"} sx={{mb: '2.5em'}}>{events.genre}</ContentText>
                    <ContentText variant={"h5"} sx={{mb: '1em'}}>{events.date}</ContentText>
                    <ContentText variant={"h5"} sx={{mb: '2.5em'}}>{events.timeStart} - {events.timeEnd}</ContentText>
                    <ContentText variant={"h4"} sx={{mb: '1em', color: 'primary.dark'}}>{t("location")}</ContentText>
                    <ContentText variant={"h5"} sx={{mb: '0.5em'}}>{events.locationFull}</ContentText>
                    <ContentText variant={"subtitle2"} sx={{mb: '3em'}}>{events.address}</ContentText>
                    <Link to={events.mapLink}>
                        <GlitchTypography>
                            <ContentButton
                                sx={{ mb: '4em', gap: '0.5em' }}
                                size={"medium"}
                                variant={"outlined"}
                            >
                                MAP
                                <NearMeIcon></NearMeIcon>
                            </ContentButton>
                        </GlitchTypography>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContentText variant={"h4"} sx={{ mb: '0.5em', color: 'primary.dark'}}>LINE UP</ContentText>
                    {lineupText.map((l) => (
                        <ContentText variant={"subtitle1"}>{l}</ContentText>
                    ))}
                    <Link to={"tickets"}>
                        <GlitchTypography>
                            <ContentButton
                                sx={{ mt: '2em' }}
                                size={"medium"}
                                variant={"outlined"}
                            >
                                Timetable
                            </ContentButton>
                        </GlitchTypography>
                    </Link>
                </Grid>
            </Grid>
        </Box>
        <Typography sx={{color: 'primary.dark', mb: '2em'}} variant={'h4'}>ACTS</Typography>
        <Box>
            <Grid container sx={{justifyContent: 'center', gap: '2em', mb: '5em'}}>
                <Grid item xs={6} md={3}>
                    <img
                        src={"/nostromo3.jpg"}
                        alt={"Nocturnal Demons"}
                        style={{ width: "80%" }
                        }
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img
                        src={"/nostromo3.jpg"}
                        alt={"Nocturnal Demons"}
                        style={{ width: "80%" }
                        }
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img
                        src={"/nostromo3.jpg"}
                        alt={"Nocturnal Demons"}
                        style={{ width: "80%" }
                        }
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img
                        src={"/nostromo3.jpg"}
                        alt={"Nocturnal Demons"}
                        style={{ width: "80%" }
                        }
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img
                        src={"/nostromo3.jpg"}
                        alt={"Nocturnal Demons"}
                        style={{ width: "80%" }
                        }
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img
                        src={"/nostromo3.jpg"}
                        alt={"Nocturnal Demons"}
                        style={{ width: "80%" }
                        }
                    />
                </Grid>
            </Grid>
        </Box>
    </Box>
  );
};
