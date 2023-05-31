import { Box } from "@mui/material";
import { GlitchTypography } from "./GlitchTypography";
import { Link } from "react-router-dom";

export const NavigationLink = ({
  title,
  link,
}: {
  title: string;
  link: string;
}) => {
  return (
    <Box
      sx={{
        "&:hover": {
          borderBottom: "1px solid red",
          cursor: "pointer",
          color: "#b5181e",
        },
        py: "0.5em",
        borderBottom: "1px solid transparent",
        color: "white",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: "white",
        }}
        to={"/" + link}
      >
        <GlitchTypography>{title}</GlitchTypography>
      </Link>
    </Box>
  );
};
