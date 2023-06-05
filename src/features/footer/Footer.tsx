import React from "react";
import { Box, styled, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { GlitchTypography } from "../../components/GlitchTypography";
import { Link } from "react-router-dom";

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.light,
  textDecoration: "none",
  transition: "0.3s",
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.primary.main,
  },
}));

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: "3px solid #b5181e",
        pt: "2em",
        pb: "1em",
        backgroundColor: "secondary.main",
      }}
    >
      <Box sx={{ gap: "1em", mb: "1em" }}>
        <FooterLink to="https://facebook.com">
          <FacebookIcon />
        </FooterLink>
        <FooterLink to="https://www.instagram.com/nocturnal.demons/">
          <InstagramIcon />
        </FooterLink>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <img
          src={"/logo.png"}
          alt={"Nocturnal Demons"}
          style={{ flex: "1", height: "10em", marginLeft: "3em" }}
        />
        <Box
          sx={{
            color: "secondary.light",
            display: "flex",
            flexDirection: "row",
            flex: "3",
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            <Typography variant={"h5"}>CONTACT US</Typography>
          </Box>
          <Box>
            <Typography variant={"h5"} sx={{ mb: "1em" }}>
              INFO
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
              <FooterLink to={"/privacy"}>
                <GlitchTypography>
                  <Typography variant={"subtitle2"}>PRIVACY</Typography>
                </GlitchTypography>
              </FooterLink>
              <FooterLink to={"/imprint"}>
                <GlitchTypography>
                  <Typography variant={"subtitle2"}>IMPRINT</Typography>
                </GlitchTypography>
              </FooterLink>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography sx={{ color: "secondary.dark", mt: "3em", fontSize: "11px" }}>
        © Copyright 2023 nocturnal-demons.de
      </Typography>
    </Box>
  );
};
