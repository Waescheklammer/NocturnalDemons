import { styled, Typography } from "@mui/material";

export const ContentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  textTransform: "uppercase",
}));
