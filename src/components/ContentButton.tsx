import { Button, styled } from "@mui/material";

export const ContentButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.light,
    textTransform: "uppercase",
    borderRadius: "0px",
    borderColor: theme.palette.secondary.light,
    width: "15em",
    transition: "1s ease-out",
    "&:hover": {
        color: theme.palette.primary.main,
    },
}));