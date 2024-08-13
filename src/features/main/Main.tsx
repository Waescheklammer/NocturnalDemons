import { Route, Routes } from "react-router-dom";
import { Events } from "./events/Events";
import { Contact } from "./contact/Contact";
import { Gallery } from "./gallery/Gallery";
import { Imprint } from "./imprint/Imprint";
import { Privacy } from "./privacy/Privacy";
import { Box } from "@mui/material";
import React from "react";
import { Details } from "./details/Details";

export const Main = () => {
  return (
    <Box sx={{ minHeight: "86vh"}}>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/:event" element={<Gallery />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Box>
  );
};
