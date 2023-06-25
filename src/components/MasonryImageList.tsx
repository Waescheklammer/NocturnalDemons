import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from "@mui/material";
import ImageViewer from 'react-simple-image-viewer';
import { useState, useCallback } from 'react';

interface MasonryImageListProps {
    imgData: { img: string, title: string }[]
}
export default function MasonryImageList({imgData} : MasonryImageListProps) {
    const matches = useMediaQuery("(max-width:1000px)");
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const images = imgData.map(data => data.img)

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <Box>
            <ImageList variant="masonry" cols={matches ? 1 : 3} gap={8}>
                {imgData.map((item, index) => (
                    <ImageListItem key={item.img} sx={{"&:hover": {cursor: 'pointer'}}}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            onClick={ () => openImageViewer(index) }
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            {isViewerOpen && (
                <ImageViewer
                    src={ images }
                    currentIndex={ currentImage }
                    disableScroll={ false }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                />
            )}
        </Box>
    );
}