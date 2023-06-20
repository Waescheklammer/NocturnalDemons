import React from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { changeBgc } from "../../../util/utils";
import { ContentText } from "../../../components/ContentText";
import { GlitchTypography } from "../../../components/GlitchTypography";

export const Gallery = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:1000px)");

  changeBgc(theme.palette.secondary.main);

  return (
      <>
        <ContentText variant={"h5"}>Gallery</ContentText>
        <Grid container>
            <Grid item md={2} xs={12} sx={{borderRight: '3px solid red'}}>
                <Box sx={{position: !matches ? 'fixed' : 'relative', ml: !matches ? '3em' : null}}>
                    <ContentText variant={"h6"} sx={{mb: '1em'}}>Events</ContentText>
                    <ContentText>
                        <GlitchTypography sx={{"&:hover": {color: 'primary.main'}, mb: '1em'}}>
                            Kühlhaus 03.23
                        </GlitchTypography>
                    </ContentText>
                    <ContentText>
                        <GlitchTypography sx={{"&:hover": {color: 'primary.main'}}}>
                            Nostromo 09.23
                        </GlitchTypography>
                    </ContentText>
                </Box>
            </Grid>
            <Grid item md={10} xs={12}>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <img
                            src={"/nostromo.png"}
                            alt={"Nocturnal Demons"}
                            style={{
                                width: "80%",
                                height: "30vh",
                            }}
                        />
                        <img
                            src={"/logo.png"}
                            alt={"Nocturnal Demons"}
                            style={{
                                width: "80%",
                                height: "30vh",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                        <img
                            src={"/logo.png"}
                            alt={"Nocturnal Demons"}
                            style={{
                                width: "80%",
                                height: "30vh",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                        <img
                            src={"/logo.png"}
                            alt={"Nocturnal Demons"}
                            style={{
                                width: "80%",
                                height: "30vh",
                            }}
                        />
                        <img
                            src={"/logo.png"}
                            alt={"Nocturnal Demons"}
                            style={{
                                width: "80%",
                                height: "30vh",
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </>
  );
};
