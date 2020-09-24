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
  opacity: 1;
  animation: ${rocketEntry} 1.5s;
  transition: transform 0.2s linear;
  z-index: 1;
  @media (max-width: 700px) {
    height: 50vh;
    top: 10vh;
  }
`;

const SpaceItem = styled.img`
  margin-top: 100px;
  position: absolute;
  transition: transform 0.2s linear;
  animation: ${spaceEntry} 0.5s;

  @media (max-width: 500px) {
    transition: transform 0.1s linear;
  }
`;

const Planet = styled(SpaceItem)`
  width: 10vh;
  top: 10vh;
  right: 15vw;
  opacity: 0.5;

  @media (max-width: 700px) {
    right: 10vw;
    top: 5vh;
  }
`;

const Asteroid = styled(SpaceItem)`
  width: 3vh;
  top: 70vh;
  right: 5vw;
  opacity: 0.5;
`;

const AsteroidTwo = styled(SpaceItem)`
  width: 4vh;
  top: 0vh;
  right: 5vw;
  opacity: 0.9;

  @media (max-width: 700px) {
    top: -40px;
    right: 0vw;
  }
`;

const Earth = styled(SpaceItem)`
  width: 9vh;
  top: 40vh;
  right: 60vh;
  opacity: 0.7;

  @media (max-width: 1050px) {
    top: 25vh;
    right: 50vh;
  }

  @media (max-width: 450px) {
    right: 35vh;
  }
`;

const Satellite = styled(SpaceItem)`
  width: 3vh;
  top: 15vh;
  right: 65vw;
  opacity: 0.7;
  z-index: 0;

  @media (max-width: 1000px) {
    right: 90vw;
  }
`;

function SpaceScene(props) {
  const [parallax, setParallax] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleParallax, 100));

    return () => {
      window.removeEventListener("scroll", throttle(handleParallax, 100));
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
          transform: `translate(${parallax * 0.5}px, ${parallax * 0.7}px) `,
        }}
      />

      <Asteroid
        src="/space/asteroid.png"
        alt="Asteroid"
        style={{
          transform: `translate(-${parallax * 0.2}px, ${parallax * 0.2}px) `,
        }}
      />

      <AsteroidTwo
        src="/space/asteroid.png"
        alt="Asteroid"
        style={{
          transform: `translate(-${parallax * 0.7}px, ${parallax * 0.7}px) `,
        }}
      />

      <Earth
        src="/space/earth.svg"
        alt="Planet earth"
        style={{
          transform: `translate(${parallax * 0.4}px, ${parallax * 0.05}px)`,
        }}
      />
    </div>
  );
}

export default SpaceScene;
