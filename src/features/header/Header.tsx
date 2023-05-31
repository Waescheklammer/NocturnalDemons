import { Toolbar } from "@mui/material";
import { NavigationLink } from "../../components/NavigationLink";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Toolbar sx={{ width: "45%", justifyContent: "space-between", mx: "auto" }}>
      <NavigationLink title={"TICKETS"} link={"Tickets"} />
      <NavigationLink title={"LOCATION"} link={"location"} />
      <img
        src={"/logo.png"}
        alt={"Nocturnal Demons"}
        style={{ width: "10em", height: "5em" }}
      />
      <NavigationLink title={"GALLERY"} link={"gallery"} />
      <NavigationLink title={"INFO"} link={"contact"} />
    </Toolbar>
  );
};
