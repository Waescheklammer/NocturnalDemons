import { Toolbar, useTheme } from "@mui/material";
import { NavigationLink } from "../../components/NavigationLink";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeBgc } from "../../util/utils";

export const Header = () => {
  const { t } = useTranslation("links");
  const theme = useTheme();

  return (
    <Toolbar sx={{ margin: "auto", gap: "2em", justifyContent: "center" }}>
      <img
        src={"/leftHand.png"}
        alt={"Nocturnal Demons"}
        style={{ width: "2em", height: "2em" }}
      />
      <NavigationLink title={t("tickets")} link={"Tickets"} />
      <NavigationLink title={t("details")} link={"details"} />
      <Link
          to={"/"}
          onClick={() => changeBgc(theme.palette.secondary.light)}
      >
        <img
          src={"/text.png"}
          alt={"Nocturnal Demons"}
          style={{ width: "10em", height: "5em" }}
        />
      </Link>
      <NavigationLink title={t("gallery")} link={"gallery"} />
      <NavigationLink title={t("info")} link={"contact"} />
      <img
        src={"/rightHand.png"}
        alt={"Nocturnal Demons"}
        style={{ width: "2em", height: "2em" }}
      />
    </Toolbar>
  );
};
