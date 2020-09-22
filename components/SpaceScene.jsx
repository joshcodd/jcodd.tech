import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import throttle from "lodash.throttle";
import Rocket from "./Rocket";

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
    transform: translate(100vw, -200vh)  ;
  }
  100% {
    transform: translate(0, 0) ;
  }
`;

const RocketStyled = styled(Rocket)`
  position: absolute;
  transform: rotate(-30deg);
  height: 72vh;
  width: auto;
  right: 15vw;
  bottom: 33vh;
  margin-bottom: 100px;
  opacity: 1;
  animation: ${rocketEntry} 1.5s;

  transition: transform 0.1s ease;

  z-index: 1;
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
  width: 3vh;
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
  width: 5vh;
  position: absolute;
  top: 0vh;
  right: 5vw;
  opacity: 0.9;
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
  opacity: 0.6;
  animation: ${spaceEntry} 0.5s;
  transition: transform 0.1s ease;

  @media (max-width: 1000px) {
    top: 30vh;
    right: 50vh;
  }

  @media (max-width: 450px) {
    right: 35vh;
    top: 25vh;
    opacity: 0.8;
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

function SpaceScene(props) {
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
    <div className={props.className}>
      <RocketStyled
        style={{
          transform: `translate(-${parallax * 0.2}px, -${
            parallax * 0.2
          }px)  rotate(-30deg)`,
        }}
      ></RocketStyled>

      <Planet
        src="/space/planet.svg"
        alt="Planet"
        style={{ transform: `translateX(${parallax * 0.1}px)` }}
      />
      <Satellite
        src="/space/satellite.svg"
        alt="Satellite"
        style={{
          transform: `translate(${parallax * 0.4}px, ${parallax * 0.6}px) `,
        }}
      />

      <Asteroid
        src="/space/asteroid.png"
        alt="Asteroid"
        style={{
          transform: `translate(-${parallax * 0.1}px, ${parallax * 0.1}px) `,
        }}
      />

      <AsteroidTwo
        src="/space/asteroid.png"
        alt="Asteroid"
        style={{
          transform: `translate(-${parallax * 0.9}px, ${parallax * 0.9}px) `,
        }}
      />

      <Earth
        src="/space/earth.svg"
        alt="Planet earth"
        style={{
          transform: `translate(${parallax * 0.4}px)`,
        }}
      />

      {props.children}
    </div>
  );
}

export default SpaceScene;
