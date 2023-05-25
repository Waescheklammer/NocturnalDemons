import { Box, Link, Typography } from "@mui/material";

export const NavigationLink = ({ title, link }: {title: string, link: string}) => {
    return (
        <Box sx={{
            "&:hover": {
                borderBottom: '1px solid red',
                cursor: 'pointer',
                color: 'red',
            },
            py: '0.5em',
            borderBottom: '1px solid transparent',
            color: 'white'
        }}>
            <Link sx={{
                textDecoration: 'none',
                color: 'white'
            }}>
                <Typography>{title}</Typography>
            </Link>
        </Box>
    )
}