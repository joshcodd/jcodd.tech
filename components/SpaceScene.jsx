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
  height: 65vh;
  max-height: 800px;
  width: auto;
  right: 15vw;
  top: 17.5vh;
  margin-top: -100px;
  opacity: 1;
  animation: ${rocketEntry} 1.5s;

  transition: transform 0.1s ease;

  z-index: 1;
  @media (max-width: 700px) {
    height: 50vh;
    top: 10vh;
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

  @media (max-width: 700px) {
    right: 10vw;
    top: 5vh;
  }
`;

const Asteroid = styled.img`
  width: 3vh;
  position: absolute;
  top: 70vh;
  right: 5vw;
  opacity: 0.5;
  animation: ${spaceEntry} 0.5s;
  transition: transform 0.1s ease;
`;

const AsteroidTwo = styled.img`
  width: 4vh;
  position: absolute;
  top: 0vh;
  right: 5vw;
  opacity: 0.9;
  animation: ${spaceEntry} 0.5s;
  transition: transform 0.1s ease;

  @media (max-width: 700px) {
    top: -40px;
    right: 0vw;
  }
`;

const Earth = styled.img`
  width: 9vh;
  position: absolute;
  top: 20vh;
  right: 70vh;
  opacity: 0.8;
  animation: ${spaceEntry} 0.5s;
  transition: transform 0.1s ease;

  @media (max-width: 1050px) {
    top: 25vh;
    right: 50vh;
  }

  @media (max-width: 450px) {
    right: 35vh;
  }
`;

const Satellite = styled.img`
  width: 3vh;
  position: absolute;
  top: 35vh;
  right: 70vh;
  opacity: 0.5;
  z-index: 0;
  transition: transform 0.1s ease;
  animation: ${spaceEntry} 0.5s;

  @media (max-width: 1050px) {
    right: 60vh;
    top: 10vh;
  }

  @media (max-width: 450px) {
    right: 50vh;
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
            parallax * 0.3
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
