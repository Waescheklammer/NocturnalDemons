import {
  Box,
  Grid,
  MenuItem,
  SelectChangeEvent,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavigationLink } from "../../components/NavigationLink";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeBgc } from "../../util/utils";
import { useEffect, useState } from "react";
import { events } from "../../data/eventinfo/Event";
import i18n from "../../i18n";
import Select from "@mui/material/Select";
import { Lang } from "../../data/enums/Lang";
import { GlitchTypography } from "../../components/GlitchTypography";

export const Header = () => {
  const { t } = useTranslation("links");
  const theme = useTheme();
  const location = useLocation();
  const [isDetails, setIsDetails] = useState(false);
  const [lang, setLang] = useState<string>(
    localStorage.getItem("lng") || Lang.de
  );
  const matchesMedium = useMediaQuery("(max-width:1000px)");
  const matchesPhone = useMediaQuery("(max-width:800px)");
  const matchesBig = useMediaQuery("(min-width:1500px)");

  useEffect(() => {
    setIsDetails(
      location.pathname === "/details" ||
        location.pathname === "/gallery/kuhlhaus" ||
        location.pathname === "/privacy" ||
        location.pathname === "/imprint"
    );
  }, [location]);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const handleChange = (event: SelectChangeEvent) => {
    const input = event.target.value as string;
    setLang(input);
    localStorage.setItem("lng", input);
  };

  return (
    <Box>
      <Toolbar>
        <Grid container>
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: "2em",
              my: "auto",
            }}
          >
            {!matchesMedium && (
              <img
                src={"/images/logo/leftHand.webp"}
                alt={"Nocturnal Demons"}
                style={{ width: "3em", height: "3em" }}
              />
            )}
            {isDetails ? (
              <Box
                sx={{
                  py: "0.5em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid transparent",
                }}
              >
                <NavigationLink title={t("home")} link={"/"} />
              </Box>
            ) : (
              <Box
                sx={{
                  py: "0.5em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid transparent",
                }}
              >
                  <Box
                      sx={{
                          py: "0.5em",
                          textTransform: "uppercase",
                          borderBottom: "1px solid transparent",
                          color: "grey",
                      }}
                  >
                      <NavigationLink title={t("details")} link={"/details"} sx={{ ml: matchesPhone ? "2em" : "0em" }}/>
                  </Box>
              </Box>
            )}
            <Box
              sx={{
                py: "0.5em",
                textTransform: "uppercase",
                borderBottom: "1px solid transparent",
              }}
            >
              <Box
                sx={{
                  py: "0.2em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid transparent",
                  color: "white",
                }}
              >
                  <NavigationLink title={t("tickets")} link={"https://eventfrog.de/de/p/party/electro/nocturnal-demons-apocalypse-7355667685353457674.html"} sx={{ ml: matchesPhone ? "2em" : "0em" }}/>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Link
              to={"/"}
              onClick={() => changeBgc(theme.palette.secondary.light)}
            >
              <img
                src={
                  isDetails
                    ? "/images/logo/text_dark.webp"
                    : "/images/logo/text_light.webp"
                }
                alt={"Nocturnal Demons"}
                style={{
                  width: !matchesMedium
                    ? matchesBig
                      ? "15em"
                      : "10em"
                    : "8em",
                  height: "5em",
                }}
              />
            </Link>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "2em",
              my: "auto",
            }}
          >
            <NavigationLink
              title={t("gallery")}
              link={"/gallery/kuhlhaus"}
              sx={{ ml: matchesPhone ? "2em" : "0em" }}
            />
            <NavigationLink title={t("info")} link={"/contact"} />
            {!matchesMedium && (
              <img
                src={"/images/logo/rightHand.webp"}
                alt={"Nocturnal Demons"}
                style={{ width: "3em", height: "3em" }}
              />
            )}
          </Grid>
        </Grid>
      </Toolbar>
      <Box sx={{ position: "absolute", top: "0.5em", ml: "85vw" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Language"
          value={lang}
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          onChange={handleChange}
          variant={"standard"}
          disableUnderline={true}
          sx={{
            mt: "1em",
            ".MuiSvgIcon-root ": {
              fill: isDetails ? "white !important" : null,
            },
          }}
        >
          <MenuItem value={Lang.de}>
            <img
              src={"/images/flags/deutschland.webp"}
              alt={Lang.de}
              style={{ width: "2em", height: "2em" }}
              loading="lazy"
            />
          </MenuItem>
          <MenuItem value={Lang.en}>
            <img
              src={"/images/flags/grossbritannien.webp"}
              alt={Lang.en}
              style={{ width: "2em", height: "2em" }}
              loading="lazy"
            />
          </MenuItem>
          <MenuItem value={Lang.cz}>
            <img
              src={"/images/flags/czech.webp"}
              alt={Lang.cz}
              style={{ width: "2em", height: "2em" }}
              loading="lazy"
            />
          </MenuItem>
          <MenuItem value={Lang.pl}>
            <img
              src={"/images/flags/poland.webp"}
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
