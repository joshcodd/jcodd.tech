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

const boosterAnimationTop = keyframes`

  0% {
    transform: skew(7deg) translateX(5.3%) scaleY(0.8) translateY(-10%) ;
  }
  50% {
    transform: skew(-7deg) translateX(-5.7%) scaleY(0.8) translateY(-10%) ;

  }
  100% {
    transform: skew(7deg) translateX(5.3%) scaleY(0.8) translateY(-10%);
  }
`;

const boosterAnimationBottom = keyframes`

0% {
    transform: skew(7deg) translateX(5.3%) scaleY(0.6) translateY(-20.8%)  ;
  }
  50% {
    transform: skew(-7deg) translateX(-5.7%) scaleY(0.75) translateY(-12.1%)   ;

  }
  100% {
    transform: skew(7deg) translateX(5.3%) scaleY(0.6) translateY(-20.8%);
  }

`;

const BoosterImageTop = styled.img`
  position: absolute;
  top: 82.5%;
  left: 0px;
  right: 0px;
  height: auto;
  width: 100%;
  transform: scaleY(0.75) translateY(-13%);
  clip-path: inset(9% 0% 72% 0px);
  opacity: 0.3;
  animation: ${boosterAnimationTop} 0.7s infinite;
`;

const BoosterImageBottom = styled(BoosterImageTop)`
  clip-path: inset(28% 0px 0px 0px);
  animation: ${boosterAnimationBottom} 0.7s infinite;
`;

function Sphere() {
  return (
    <RocketContainer>
      <RocketImage src="rocket-size.svg" />
      <BoosterImageTop src="rocket-short.svg" />
      <BoosterImageBottom src="rocket-short.svg" />
    </RocketContainer>
  );
}

export default Sphere;
