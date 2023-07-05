import { Box, styled, Typography, useTheme } from "@mui/material";
import { GlitchTypography } from "./GlitchTypography";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { changeBgc } from "../util/utils";
import { useTranslation } from "react-i18next";

const StyledLink = styled(Link)(({ theme }) => ({
  transition: "0.3s",
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.primary.main,
    textDecoration: "underline",
    textUnderlineOffset: "1em",
  },
}));

const blackPages = ["/details", "/imprint", "/gallery", "/privacy"];

export const NavigationLink = ({
  title,
  link,
  sx,
}: {
  title: string;
  link: string;
  sx?: any;
}) => {
  const theme = useTheme();
  const { t } = useTranslation("links");
  const location = useLocation();
  const [isBlackPage, setIsBlackPage] = useState(false);

  useEffect(() => {
    setIsBlackPage(blackPages.includes(location.pathname));
  }, [location]);

  const handleBgColor = () => {
    title === t("details") || title === t("gallery")
      ? changeBgc(theme.palette.secondary.main)
      : changeBgc(theme.palette.secondary.light);
  };

  return (
    <Box
      sx={{
        ...sx,
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
