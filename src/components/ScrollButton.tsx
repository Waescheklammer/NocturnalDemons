import React, { useEffect, useState } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export const ScrollButton = () => {
    window.onscroll = function() {scrollFunction()};
    const [scrollToTop, setScrollToTop] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const matches = useMediaQuery("(max-width:600px)")

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setScrollToTop(false)
    }, [scrollToTop])
    const scrollFunction = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    const handleScrolling = () => {
        setScrollToTop(true)
    }

    return (
        <Box sx={{position: 'fixed', mt: '70vh', ml: matches ? '80vw' : '87vw', display: showButton ? 'block' : 'none'}}>
            <Button onClick={handleScrolling} variant={"outlined"} sx={{
                color: 'secondary.light',
                borderColor: 'secondary.light',
                transition: '0.5s',
                borderRadius: '0px',
                "&:hover": {
                    color: 'primary.main',
                    borderColor: 'primary.main'
                }
            }}>
                <KeyboardDoubleArrowUpIcon></KeyboardDoubleArrowUpIcon>
            </Button>
        </Box>
    )
}