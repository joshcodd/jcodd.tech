import React from "react";
import styled, { keyframes } from "styled-components";

const GlitchContainer = styled.div`
  font-family: "Playfair Display", serif;
  font-weight: 600;
  display: inline-block;
  font-size: 70px;
  ::selection {
    background: #fff; /* WebKit/Blink Browsers */
  }
`;
const ColourSplit = styled.span`
  position: absolute;
  left: 0;
  mix-blend-mode: multiply;
  color: transparent;
`;

const Hidden = styled(ColourSplit)`
  position: relative;
  visibility: hidden;
`;

const pinkAnimation = keyframes`
  1% {
    transform: translate(0px, 0px);
  }
  2% {
    transform: translate(-5.5px, -2.5px) skew(5deg);
  }
  3% {
    transform: translate(0px, 0px);
  }
  5% {
    transform: translate(0px, 0px);
  }
  6% {
    transform: translate(0px, 0px) skew(-10deg);
  }
  7% {
    transform: translate(-4px, 0px) ;
  }
  8% {
   transform: translate(2.5px, -2.5px) skew(-20deg);
  }
  9% {
    transform: translate(7.5px, -2.5px) skew(10deg);
  }
  10% {
    transform: translate(0px, 0px);
  }
  13% {
    transform: translate(0px, 0px);
  }
  14% {
    transform: translate(0px, 0px) ;
  }
  15% {
   transform: translate(60px, 0px) skew(-10deg);
  }
  16% {
   transform: translate(0px, 0px) ;
  }
  19% {
   transform: translate(0px, 0px) ;
  }
  20% {
    transform: translate(0px, 0px);
  }
  
`;

const Pink = styled(ColourSplit)`
  text-shadow: 0 0 1.5px #ff00ff;
  animation: ${pinkAnimation} 6s infinite;
`;

const yellowAnimation = keyframes`
  1% {
    transform: translate(2.5px, 2.5px);
  }
  2% {
    transform: translate(-2.5px, -2.5px) skew(10deg);
  }
  3% {
    transform: translate(0px, 0px);
  }
  5% {
    transform: translate(0px, 0px);
  }
  6% {
    transform: translate(0px, 0px) skew(-10deg);
  }
  7% {
    transform: translate(2.5px, 2.5px) ;
  }
  8% {
   transform: translate(-2.5px, -2.5px) skew(-20deg);
  }
  9% {
    transform: translate(-2.5px, -2.5px) skew(10deg);
  }
  10% {
    transform: translate(0px, 0px);
  }
  13% {
    transform: translate(0px, 0px);
  }
  14% {
    transform: translate(17px, -2.5px) ;
  }
  15% {
   transform: translate(-2.5px, -2.5px) skew(-10deg);
  }
  16% {
   transform: translate(0px, 0px) ;
  }
  19% {
   transform: translate(0px, 0px) ;
  }
  20% {
    transform: translate(2.5px, 2.5px);
  }
  
`;

const Yellow = styled(ColourSplit)`
  text-shadow: 0 0 1.5px #ffff00;
  transform: translate(2.5px, 2.5px);
  animation: ${yellowAnimation} 5s infinite;
`;

const blueAnimation = keyframes`
  1% {
    transform: translate(-2.5px, -2.5px);
  }
  2% {
    transform: translate(2.5px, 2.5px) skew(10deg);
  }
  3% {
    transform: translate(0px, 0px);
  }
  5% {
    transform: translate(0px, 0px);
  }
  6.5% {
    transform: translate(0px, 0px)skew(-10deg);
  }
  7% {
   transform: translate(-50px, -2.5px) ;
  }
  7.5% {
   transform: translate(2.5px, 2.5px) skew(-20deg);
  }
  9% {
    transform: translate(2.5px, 2.5px) skew(10deg);
  }
  10% {
    transform: translate(0px, 0px);
  }
  13% {
    transform: translate(0px, 0px);
  }
  14.5% {
   transform: translate(-2.5px, -2.5px) ;
  }
  15% {
   transform: translate(-2.5px, -16px) skew(10deg);
  }
  15.5% {
   transform: translate(0px, 0px) ;
  }
  19% {
   transform: translate(0px, 0px) ;
  }
  20% {
    transform: translate(-2.5px, -2.5px);
  }

`;

const Blue = styled(ColourSplit)`
  text-shadow: 0 0 1.5px #00ffff;
  transform: translate(-2.5px, -2.5px);
  animation: ${blueAnimation} 6s infinite;
`;

function GlitchText(props) {
  const text = props.text;
  return (
    <GlitchContainer>
      {console.log("hello")}
      {/* <mark> */}
      <Hidden>{text}</Hidden>

      <Blue>{text}</Blue>

      <Yellow>{text}</Yellow>
      <Pink>{text}</Pink>

      <Blue>{text}</Blue>
      <Yellow>{text}</Yellow>
      {/* </mark> */}
    </GlitchContainer>
  );
}

export default GlitchText;
