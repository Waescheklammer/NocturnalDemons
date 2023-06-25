import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { ContentText } from "../../../components/ContentText";

export const Contact = () => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Grid container>
      <Grid item xs={12}>
        <img
          src={"/images/logo/nocturnalAbout.png"}
          alt={"Nocturnal Demons"}
          style={{
            width: "100%",
            height: matches ? "100vh" : "90vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{ height: "100vh", pt: "5em" }}>
        <ContentText sx={{ color: "black" }} variant={"h4"}>
          Worum geht es uns?
        </ContentText>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ backgroundColor: "secondary.main", height: "100vh", pt: "5em" }}
      >
        <ContentText variant={"h4"}>Worum geht es uns?</ContentText>
      </Grid>
      <Grid item xs={12} sx={{ height: "100vh", pt: "5em" }}>
        <ContentText sx={{ color: "black" }} variant={"h4"}>
          Kontakt
        </ContentText>
      </Grid>
    </Grid>
  );
};
