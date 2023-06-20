import { Box, styled, Typography, useTheme } from "@mui/material";
import { GlitchTypography } from "./GlitchTypography";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { changeBgc } from "../util/utils";

const StyledLink = styled(Link)(({ theme }) => ({
  transition: "0.5s",
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.primary.main,
    textDecoration: "underline",
    textUnderlineOffset: "1em",
  },
}));

export const NavigationLink = ({
  title,
  link,
}: {
  title: string;
  link: string;
}) => {
  const theme = useTheme();
  const location = useLocation();
  const [isBlackPage, setIsBlackPage] = useState(false);

  useEffect(() => {
    setIsBlackPage(
      location.pathname === "/details" || location.pathname === "/imprint" || location.pathname === "/gallery"
    );
  }, [location]);

  const handleBgColor = () => {
    title === "DETAILS"
      ? changeBgc(theme.palette.secondary.main)
      : changeBgc(theme.palette.secondary.light);
  };

  return (
    <Box
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
        py: "0.5em",
        textTransform: "uppercase",
        borderBottom: "1px solid transparent",
        color: "white",
      }}
    >
      <StyledLink
        to={link}
        sx={{ color: isBlackPage ? "secondary.light" : "secondary.main" }}
        onClick={handleBgColor}
      >
        <GlitchTypography>
          <Typography variant={"h5"}>{title}</Typography>
        </GlitchTypography>
      </StyledLink>
    </Box>
  );
};
