import React, { useContext, useEffect, useState } from "react";
import GlitchText from "./GlitchText";
import Rocket from "./Rocket";
import styled, { keyframes } from "styled-components";
import { ColoursContext } from "./ColoursContext";
import ScrollAnimation from "react-animate-on-scroll";
import throttle from "lodash.throttle";

const rocketEntry = keyframes`
  0% {
    transform: translate(100vw, 200vh) rotate(-30deg)  ;
  }
  100% {
    transform: translate(0, 0) rotate(-30deg);
  }
`;

const spaceEntry = keyframes`
  0% {
    transform: translate(100vw, 200vh)  ;
  }
  100% {
    transform: translate(0, 0) ;
  }
`;

const TitleContainer = styled.div`
  height: 120vh;
  width: 100vw;
`;

const LeftContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
  float: left;
  box-sizing: border-box;
  overflow: hidden;
`;

const RocketContainer = styled.div`
  position: absolute;
  transform: rotate(-30deg);
  height: 72vh;
  width: auto;
  right: 15vw;
  bottom: 33vh;
  opacity: 1;
  animation: ${rocketEntry} 1.5s;

  transition: transform 0.1s ease;

  @media (max-width: 450px) {
    height: 50vh;
    bottom: 60vh;
  }
`;

const Planet = styled.img`
  width: 10vh;
  position: absolute;
  top: 10vh;
  right: 15vw;
  opacity: 0.5;
  animation: ${spaceEntry} 0.5s;
  transition: transform 0.1s ease;

  @media (max-width: 450px) {
    right: 10vw;
    top: 5vh;
  }
`;

const Asteroid = styled.img`
  width: 7vh;
  position: absolute;
  top: 70vh;
  right: 5vw;
  opacity: 0.2;
  animation: ${spaceEntry} 0.5s;
  transition: transform 0.1s ease;

  @media (max-width: 450px) {
  }
`;

const AsteroidTwo = styled.img`
  width: 8vh;
  position: absolute;
  top: 0vh;
  right: 5vw;
  opacity: 0.7;
  animation: ${spaceEntry} 0.5s;
  transition: transform 0.1s ease;

  @media (max-width: 450px) {
    top: -40px;
    right: 0vw;
  }
`;

const Earth = styled.img`
  width: 11vh;
  position: absolute;
  top: 45vh;
  right: 60vh;
  opacity: 0.5;
  animation: ${spaceEntry} 0.5s;
  transition: transform 0.1s ease;

  @media (max-width: 1500px) {
    top: 45vh;
    right: 60vh;
  }

  @media (max-width: 450px) {
    right: 35vh;
    top: 25vh;
  }
`;

const Satellite = styled.img`
  width: 5vh;
  position: absolute;
  top: 30vh;
  right: 80vh;
  opacity: 0.5;
  z-index: 0;
  transition: transform 0.1s ease;
  animation: ${spaceEntry} 0.5s;

  @media (max-width: 600px) {
    right: 60vh;
    top: 20vh;
  }

  @media (max-width: 450px) {
    right: 40vh;
    top: 20vh;
  }
`;

const ParallaxContainer = styled.div`
  width: 100vw;
  height: 72vh;
  position: absolute;
  top: 100px;
  right: 0vw;
`;

const Anchor = styled.div`
  display: none;
`;

const TextContainer = styled.div`
  position: absolute;
  display: inline-block;
  margin-left: 15vw;
  bottom: 40vh;
  width: 48%;
  max-width: 450px;
  float: left;

  @media (max-width: 630px) {
    margin-left: 5%;
    width: 75%;
  }
`;

const ImAText = styled.p`
  position: relative;
  opacity: 0.9;
  margin: 10px 0 15px 0;
  @media (max-width: 630px) {
    width: 65%;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Email = styled.h3`
  display: inline-block;
  position: relative;
  top: 20px;
  padding: 5px 40px;
  border-bottom: 2px solid ${(props) => props.textColour};
  z-index: 1;

  ::after {
    position: absolute;
    content: "";
    background: ${(props) => props.textColour};
    z-index: -1;
    height: 0;
    left: 0;
    bottom: 0;
    width: 100%;

    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  :hover {
    color: ${(props) => props.backgroundColour};
  }

  :hover:after {
    height: 100%;
  }
`;

function Title() {
  const { foreground, background } = useContext(ColoursContext);
  const [parallax, setParallax] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleParallax, 50));

    return () => {
      window.removeEventListener("scroll", throttle(handleParallax, 50));
    };
  }, []);

  function handleParallax() {
    setParallax(window.pageYOffset);
  }

  return (
    <TitleContainer>
      <Anchor>Anchor Element</Anchor>
      <LeftContainer>
        <ParallaxContainer>
          <Planet
            src="/planet.svg"
            style={{ transform: `translateX(${parallax * 0.1}px)` }}
          />
          <Satellite
            src="/satellite.svg"
            style={{
              transform: `translate(${parallax * 0.4}px, ${parallax * 0.6}px) `,
            }}
          />

          <Asteroid
            src="/asteroid.png"
            style={{
              transform: `translate(-${parallax * 0.1}px, ${
                parallax * 0.1
              }px) `,
            }}
          />

          <AsteroidTwo
            src="/asteroid.png"
            style={{
              transform: `translate(-${parallax * 0.9}px, ${
                parallax * 0.9
              }px) `,
            }}
          />

          <Earth
            src="/earth.svg"
            style={{
              transform: `translate(${parallax * 0.5}px, -${
                parallax * 0.5
              }px) `,
            }}
          />
        </ParallaxContainer>
        <RocketContainer
          style={{
            transform: `translate(-${parallax * 0.2}px, -${
              parallax * 0.2
            }px)  rotate(-30deg)`,
          }}
        >
          <Rocket />
        </RocketContainer>

        <TextContainer>
          <ScrollAnimation
            animateIn="animate__backInDown"
            duration={2}
            animateOnce={true}
          >
            <GlitchText text="Hi, I'm Josh" />

            <ImAText>
              I'm a software engineer based in Swansea, Wales. Focused on
              writing efficient, clean and readable code.
            </ImAText>

            <Email textColour={foreground} backgroundColour={background}>
              jjc21@live.co.uk
            </Email>
          </ScrollAnimation>
        </TextContainer>
      </LeftContainer>
    </TitleContainer>
  );
}

export default Title;
