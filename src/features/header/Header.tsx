import { Box, List, Typography, Toolbar } from "@mui/material";
import { NavigationLink } from "../../components/NavigationLink";
export const Header = () => {
    return (

        <Toolbar sx={{width: '45%', justifyContent: 'space-between', mx: 'auto'}}>
                <NavigationLink title={"Tickets"} link={"Tickets"} />
                <NavigationLink title={"Location"} link={"Location"} />
                <img src={"/logo.png"} alt={"Nocturnal Demons"} style={{ width: '10em', height: '5em' }}/>
                <NavigationLink title={"Gallery"} link={"Gallery"} />
                <NavigationLink title={"Info"} link={"Info"} />
        </Toolbar>
    )
}