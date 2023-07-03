import React, { useState } from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { changeBgc } from "../../../util/utils";
import { ContentText } from "../../../components/ContentText";
import { GlitchTypography } from "../../../components/GlitchTypography";
import { ScrollButton } from "../../../components/ScrollButton";
import MasonryImageList from "../../../components/MasonryImageList";

export const Gallery = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:1000px)");
  const [imgSelection, setImgSelection] = useState(imgData);

  changeBgc(theme.palette.secondary.main);

  const handleClick = () => {
    setImgSelection(imgData);
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
            <ContentText onClick={handleClick}>
              <GlitchTypography
                sx={{
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                  mb: "1em",
                }}
                component={"span"}
              >
                Kühlhaus 03.23
              </GlitchTypography>
            </ContentText>
            <ContentText>
              <GlitchTypography
                sx={{ "&:hover": { color: "grey" }, color: "grey" }}
                component={"span"}
              >
                Nostromo 09.23
              </GlitchTypography>
            </ContentText>
          </Box>
        </Grid>
        <Grid item md={10} xs={12}>
          <MasonryImageList imgData={shuffleArray(imgSelection)}></MasonryImageList>
        </Grid>
      </Grid>
    </>
  );
};

const shuffleArray = (array: {img: string, title: string}[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}


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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
