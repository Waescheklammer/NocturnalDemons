import { Route, Routes } from "react-router-dom";
import { Events } from "./events/Events";
import { Contact } from "./contact/Contact";
import { Gallery } from "./gallery/Gallery";
import { Location } from "./location/Location";
import { Imprint } from "./imprint/Imprint";
import { Privacy } from "./privacy/Privacy";
import { Box } from "@mui/material";
import React from "react";

export const Main = () => {
    return (
        <Box sx={{ minHeight: "80vh", pb: "2em" }}>
            <Routes>
                <Route path="/" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/location" element={<Location />} />
                <Route path="/imprint" element={<Imprint />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
        </Box>
    )
}