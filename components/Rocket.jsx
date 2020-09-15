import React from "react";
import styled, { keyframes } from "styled-components";

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

const glitch = keyframes`
  1% {
    clip-path: inset(9% 0% 70% 0%);
    transform:  translateX(-13%);
  }
  1.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(0%);
  }
  2% {
    clip-path: inset(10% 0% 20% 0%);
  }
  2.5% {
    clip-path: inset(0% 0% 0% 0%);
  }
  3% {
    clip-path: inset(0% 0% 80% 0%);
    transform: translateX(-43%);
  }
  3.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(0%);
  }
  4% {
    clip-path: inset(22% 0% 55% 0%);
    transform:  translateX(55%);
  }
  4.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(0%);
  }
  5% {
    clip-path: inset(70% 0% 90% 0%);
    transform:  translateX(50%);
  }
  5.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(0%);
  }
  6% {
    clip-path: inset(60% 0% 0% 0%);
    transform:  translateX(-10%);
  }
  6.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(0%);
  }
  7% {
    clip-path: inset(0% 0% 500% 0%);
    transform:  translateX(70%);
  }
  7.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(0%);
  }

  90.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(-0.5%);
  }
  91% {
    clip-path: inset(9% 0% 70% 0%);
    transform:  translateX(-13%);
  }
  91.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(0%);
  }
  92% {
    clip-path: inset(10% 0% 20% 0%);
  }
  92.5% {
    clip-path: inset(0% 0% 0% 0%);
  }
  93% {
    clip-path: inset(0% 0% 80% 0%);
    transform: translateX(-43%);
  }
  93.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(0%);
  }
  94% {
    clip-path: inset(22% 0% 55% 0%);
    transform:  translateX(55%);
  }
  94.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(0%);
  }
  95% {
    clip-path: inset(70% 0% 90% 0%);
    transform:  translateX(50%);
  }
  95.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(0%);
  }
  96% {
    clip-path: inset(60% 0% 0% 0%);
    transform:  translateX(-10%);
  }
  96.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(0%);
  }
  97% {
    clip-path: inset(0% 0% 500% 0%);
    transform:  translateX(70%);
  }
  97.5% {
    clip-path: inset(0% 0% 0% 0%);
    transform:  translateX(0%);
  }
 `;

const RocketContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  opacity: 0.8;
  min-width: 310px;
`;

const RocketImage = styled.img`
  position: relative;
  top: 0px;
  left: 0px;
  height: auto;
  width: 100%;
`;

const RocketImageBehind = styled(RocketImage)`
  position: absolute;
  animation: ${glitch} 10s infinite linear alternate-reverse;
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

function Rocket() {
  return (
    <RocketContainer>
      <RocketImage src="rocket-size.svg" />
      <RocketImageBehind src="rocket-size.svg" />
      <BoosterImageTop src="rocket-short.svg" />
      <BoosterImageBottom src="rocket-short.svg" />
    </RocketContainer>
  );
}

export default Rocket;
