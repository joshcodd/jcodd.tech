import React, { useContext } from "react";
import GlitchText from "./GlitchText";

import SpaceScene from "./SpaceScene";
import styled, { keyframes } from "styled-components";
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
  overflow: hidden;
`;

const SpaceStyled = styled(SpaceScene)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100px;
  z-index: 0;
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

  return (
    <TitleContainer>
      <div style={{ visibility: "hidden", position: "absolute" }}>Anchor</div>
      <LeftContainer>
        <SpaceStyled />
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
