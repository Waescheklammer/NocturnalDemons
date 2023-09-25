import React, { useState } from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { changeBgc } from "../../../util/utils";
import { ContentText } from "../../../components/ContentText";
import { ScrollButton } from "../../../components/ScrollButton";
import MasonryImageList from "../../../components/MasonryImageList";
import {useParams} from "react-router-dom";

export const Gallery = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:1000px)");
  const {event} = useParams();
  const getParameterEvent = (eventName: string | undefined) => {
    if(eventName === "kühlhaus") {
      return imgData
    }
    if(eventName === "abyss") {
      return imgDataAbyss()
    }
    return imgData
  }

  const [eventSelected, setEventSelected] = useState(event);
  const [imgSelection, setImgSelection] = useState(getParameterEvent(event));

  changeBgc(theme.palette.secondary.main);

  const handleClick = (
    data: { img: string; title: string }[],
    title: string
  ) => {
    setImgSelection(data);
    setEventSelected(title);
  };


  return (
    <>
      {!matches && <ScrollButton></ScrollButton>}
      <Grid container sx={{ pt: "4em", pr: "1em", pl: matches ? "1em" : null }}>
        <Grid item md={2} xs={12}>
          <Box
            sx={{
              position: !matches ? "fixed" : "relative",
              ml: !matches ? "3em" : null,
            }}
          >
            <ContentText variant={"h6"} sx={{ mb: "1em" }}>
              Events
            </ContentText>
            {eventList.map((event) => (
              <Box key={event.title} sx={{ mb: "0.3em" }}>
                <ContentText
                  onClick={
                    event.disabled || event.data === undefined
                      ? undefined
                      : () => handleClick(event.data, event.title)
                  }
                >
                  <Grid
                    container
                    spacing={3}
                    component={"span"}
                    sx={{
                      color: event.disabled
                        ? "grey"
                        : eventSelected === event.title
                        ? event.color
                        : "secondary.light",
                      "&:hover": {
                        color: event.disabled ? "grey" : event.color,
                        cursor: event.disabled ? "default" : "pointer",
                      },
                    }}
                  >
                    <Grid
                      item
                      sx={{ textAlign: "left", minWidth: "6em" }}
                      component={"span"}
                    >
                      {event.title}
                    </Grid>
                    <Grid item component={"span"}>
                      {event.date}
                    </Grid>
                  </Grid>
                </ContentText>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item md={10} xs={12}>
          <MasonryImageList
            imgData={imgSelection}
          ></MasonryImageList>
        </Grid>
      </Grid>
    </>
  );
};

const shuffleArray = (array: { img: string; title: string }[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const imgData = [
  {
    img: "/images/gallery/_DSC3810.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC3830.jpg",
    title: "Books",
  },
  {
    img: "/images/gallery/_DSC4183.jpg",
    title: "Books",
  },
  {
    img: "/images/gallery/_DSC3845-2.jpg",
    title: "Books",
  },
  {
    img: "/images/gallery/_DSC4176.jpg",
    title: "Books",
  },

  {
    img: "/images/gallery/_DSC4214.jpg",
    title: "Nostromo",
  },
  {
    img: "/images/gallery/_DSC4216.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC4425-2.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC4260.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC4274.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC4293.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC4489.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC4541.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC4914.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC4959.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5045.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5097.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5150.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5161.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5209.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5230.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5266.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5294.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5412.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5396-2.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5423.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5555.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5557.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5607.jpg",
    title: "Bed",
  },
  {
    img: "/images/gallery/_DSC5610.jpg",
    title: "Bed",
  },
];

const imgDataAbyss = () => {
  let data = []
  for (let i = 1; i <= 74; i++) {
    data.push({img: `/images/gallery/Abyss/${i}.webp`, title: "Bed"})
  }
  return data
}
const eventList = [
  {
    title: "KÜHLHAUS",
    date: "03.23",
    data: imgData,
    disabled: false,
    color: "primary.main"
  },
  {
    title: "ABYSS",
    date: "09.23",
    data: imgDataAbyss(),
    disabled: false,
    color: "purple"
  },
];
