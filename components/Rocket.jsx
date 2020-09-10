import React from "react";
import styled, { keyframes } from "styled-components";

const RocketContainer = styled.div`
  display: inline-block;
  position: relative;
  ${"" /* transform: rotate(-40deg); */}
  width: 60%;
  opacity: 0.8;
`;

const RocketImage = styled.img`
  position: relative;
  top: 0px;
  left: 0px;
  height: auto;
  width: 100%;
`;

const boosterAnimation = keyframes`

  0% {
    transform: skew(3deg) translateX(6.5px) scaleX(-1)  ;
  }
  20% {
    transform: skew(-3deg) translateX(-6.5px) scaleX(-1) ;

  }
  40% {
    transform: skew(3deg) translateX(6.5px) scaleX(-1) ;
  }
  60% {
    transform: skew(3deg) translateX(6.5px) scaleX(1) ;
  }
  80% {
    transform: skew(-3deg) translateX(-6.5px) scaleX(1) ;

  }
  100% {
    transform: skew(3deg) translateX(6.5px) scaleX(-1) ;
  }

`;

const BoosterImage = styled.img`
  position: absolute;
  top: 83%;
  left: 0px;
  right: 0px;
  height: auto;
  width: 100%;

  clip-path: inset(9% 0px 0px 0px);
  opacity: 0.5;
  animation: ${boosterAnimation} 0.3s infinite;
`;

function Sphere() {
  return (
    <RocketContainer>
      <RocketImage src="rocket-size.svg" />
      <BoosterImage src="rocket-short.svg" />
    </RocketContainer>
  );
}

export default Sphere;
