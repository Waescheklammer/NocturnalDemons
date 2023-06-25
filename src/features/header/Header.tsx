import { Box, Grid, MenuItem, SelectChangeEvent, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { NavigationLink } from "../../components/NavigationLink";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeBgc } from "../../util/utils";
import { useEffect, useState } from "react";
import { events } from "../../data/eventinfo/Event";
import i18n from "../../i18n";
import Select from "@mui/material/Select";
import { Lang } from "../../data/enums/Lang";

export const Header = () => {
  const { t } = useTranslation("links");
  const theme = useTheme();
  const location = useLocation();
  const [isDetails, setIsDetails] = useState(false);
  const [lang, setLang] = useState<string>(localStorage.getItem("lng") || Lang.de);
  const matches = useMediaQuery("(max-width:1000px)");

  useEffect(() => {
    setIsDetails(location.pathname === "/details");
  }, [location]);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const handleChange = (event: SelectChangeEvent) => {
    const input = event.target.value as string
    setLang(input);
    localStorage.setItem("lng", input);
  };

  return (
    <Box>
          <Toolbar>
            <Grid container>
              <Grid item xs={5} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '2em', my: 'auto'}}>
                {!matches && (
                    <img
                        src={"/leftHand.png"}
                        alt={"Nocturnal Demons"}
                        style={{ width: "2em", height: "2em" }}
                    />
                )}
                {isDetails ? (
                    <NavigationLink title={t("home")} link={"/"} />
                ) : (
                    <NavigationLink title={t("details")} link={"details"} />
                )}
                <NavigationLink title={t("tickets")} link={events.ticketLink} />
              </Grid>
              <Grid item xs={2}>
                <Link to={"/"} onClick={() => changeBgc(theme.palette.secondary.light)}>
                  <img
                      src={"/text.png"}
                      alt={"Nocturnal Demons"}
                      style={{ width: !matches ? "10em" : "8em", height: "5em" }}
                  />
                </Link>
              </Grid>
              <Grid item xs={5} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '2em', my: 'auto'}}>
                <NavigationLink title={t("gallery")} link={"/gallery"} />
                <NavigationLink title={t("info")} link={"/contact"} />
                {!matches && (
                    <img
                        src={"/rightHand.png"}
                        alt={"Nocturnal Demons"}
                        style={{ width: "2em", height: "2em" }}
                    />
                )}
              </Grid>
            </Grid>
          </Toolbar>
          <Box sx={{ position: 'absolute', top: "0.5em", ml: "85vw"}}>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Language"
                  value={lang}
                  inputProps={{MenuProps: {disableScrollLock: true}}}
                  onChange={handleChange}
                  variant={"standard"}
                  disableUnderline={true}
                  sx={{mt: '1em', '.MuiSvgIcon-root ': {
                      fill: isDetails ? "white !important" : null,
                    }}}
              >
                <MenuItem value={Lang.de}>
                  <img
                      src={"/deutschland.png"}
                      alt={Lang.de}
                      style={{ width: "2em", height: "2em" }}
                      loading="lazy"
                  />
                </MenuItem>
                <MenuItem value={Lang.en}>
                  <img
                      src={"/grossbritannien.png"}
                      alt={Lang.en}
                      style={{ width: "2em", height: "2em" }}
                      loading="lazy"
                  />
                </MenuItem>
                <MenuItem value={Lang.cz}>
                  <img
                      src={"/czech.png"}
                      alt={Lang.cz}
                      style={{ width: "2em", height: "2em" }}
                      loading="lazy"
                  />
                </MenuItem>
                <MenuItem value={Lang.pl}>
                  <img
                      src={"/poland.png"}
                      alt={Lang.pl}
                      style={{ width: "2em", height: "2em" }}
                      loading="lazy"
                  />
                </MenuItem>
              </Select>
          </Box>
    </Box>
  );
};
