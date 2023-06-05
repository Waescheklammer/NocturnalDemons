import { Box, keyframes, styled } from "@mui/material";

const glitch = keyframes`
  2%,64%{
    transform: translate(1px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-1px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg);
  }
`;

const glitchTop = keyframes`
  2%,64%{
    transform: translate(1px,-1px);
  }
  4%,60%{
    transform: translate(-1px,1px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg);
  }
`;

const glitchBottom = keyframes`
  2%,64%{
    transform: translate(-1px,0);
  }
  4%,60%{
    transform: translate(-1px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg);
  }
`;

export const GlitchTypography = styled(Box)(() => ({
  "&:hover": {
    animation: `${glitch} 1s linear 1`,
  },
  "&:before": {
    animation: `${glitchTop} 1s linear 1`,
    clipPath: "polygon(0 0, 100% 0, 100% 33%, 0 33%)",
    webkitClipPath: "polygon(0 0, 100% 0, 100% 33%, 0 33%)",
  },
  "&:after": {
    animation: `${glitchBottom} 1.5s linear 1`,
    clipPath: "polygon(0 67%, 100% 67%, 100% 100%, 0 100%)",
    webkitClipPath: "polygon(0 67%, 100% 67%, 100% 100%, 0 100%)",
  },
}));
