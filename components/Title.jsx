import React, { useContext, useEffect, useState } from "react";
import GlitchText from "./GlitchText";
import Rocket from "./Rocket";
import styled from "styled-components";
import { ColoursContext } from "./ColoursContext";
import ScrollAnimation from "react-animate-on-scroll";

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
`;

const RocketContainer = styled.div`
  position: absolute;

  transform: rotate(-30deg);

  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
  transition: all 2s ease-in-out;

  bottom: ${(props) => props.rocketPosition.bottom};
  height: 72vh;
  width: auto;

  right: ${(props) => props.rocketPosition.right};
  opacity: 0.5;

  @media (max-width: 450px) {
    height: 50vh;
    bottom: ${(props) => props.rocketPosition.bottomMobile};
    right: ${(props) => props.rocketPosition.rightMobile};
  }
`;

const TextContainer = styled.div`
  position: absolute;
  display: inline-block;
  margin-left: 15vw;
  bottom: 43vh;
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
  const [rocketPosition, setRocketPosition] = useState({
    right: "-150vw",
    bottom: "-300vh",
    rightMobile: "-100vw",
    bottomMobile: "-100vh",
  });

  useEffect(() => {
    const rocketPosition = {
      right: "15vw",
      bottom: "35vh",
      rightMobile: "20vh",
      bottomMobile: "60vh",
    };
    setTimeout(() => setRocketPosition(rocketPosition), 2000);
  });

  return (
    <TitleContainer>
      <LeftContainer>
        <RocketContainer rocketPosition={rocketPosition}>
          <Rocket />
        </RocketContainer>
        <TextContainer>
          <ScrollAnimation animateIn="animate__backInDown" duration={2}>
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
