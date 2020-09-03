import React from "react";
import styled, { keyframes } from "styled-components";

const GlitchContainer = styled.div`
  font-family: "Playfair Display", serif;
  font-weight: 500;
  display: inline-block;
  font-size: 100px;
`;
const ColourSplit = styled.span`
  position: relative;
  mix-blend-mode: darken;
  color: transparent;
`;

const Pink = styled(ColourSplit)`
  text-shadow: 0 0 1.5px #ff20ff;
`;

const yellowAnimation = keyframes`
  0% {
    transform: translate(2.5px, 2.5px);
  }
  65% {
    transform: translate(2.5px, 2.5px);
  }
  69% {
    transform: translate(-2.5px, -2.5px);
  }
  70% {
    transform: translate(0px, 0px);
  }
  73% {
    transform: translate(0px, 0px);
  }
  74% {
    transform: translate(2.5px, 2.5px);
  }
  100% {
    transform: translate(2.5px, 2.5px);
}
`;

const Yellow = styled(ColourSplit)`
  position: absolute;
  left: 0;
  text-shadow: 0 0 1.5px #feff1f;
  animation: ${yellowAnimation} 6s infinite;
`;

const blueAnimation = keyframes`
  0% {
    transform: translate(-2.5px, -2.5px);
  }
  65% {
    transform: translate(-2.5px, -2.5px);
  }
  69% {
    transform: translate(2.5px, 2.5px);
  }
  70% {
    transform: translate(0px, 0px);
  }
  73% {
    transform: translate(0px, 0px);
  }
  74% {
   transform: translate(-2.5px, -2.5px);
  }
  100% {
    transform: translate(-2.5px, -2.5px);
  }
`;

const Blue = styled(ColourSplit)`
  position: absolute;
  left: 0;
  text-shadow: 0 0 1.5px #20ffff;
  animation: ${blueAnimation} 6s infinite;
`;

function GlitchText(props) {
  const text = props.text;
  return (
    <GlitchContainer>
      <Pink>{text}</Pink>
      <Yellow>{text}</Yellow>
      <Blue>{text}</Blue>
    </GlitchContainer>
  );
}

export default GlitchText;
