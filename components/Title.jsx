import React from "react";
import GlitchText from "./GlitchText";
import SpaceScene from "./SpaceScene";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import data from "../content/title.json";

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
  opacity: 0.7;
`;

const TextContainer = styled.div`
  position: absolute;
  display: inline-block;
  margin-left: 15vw;
  top: 40vh;
  width: 48%;
  max-width: 450px;
  float: left;

  @media (max-width: 1050px) {
    top: 60vh;
    margin-left: 8vw;
  }

  @media (max-width: 630px) {
    margin-left: 5%;
    width: 75%;
  }
`;

const ImAText = styled.p`
  position: relative;
  top: -5px;
  opacity: 0.9;
  margin: 10px 0 15px 0;
  @media (max-width: 630px) {
    width: 65%;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const EmailButton = styled.a`
  position: relative;
  width: 180px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: white;
  background-color: #242424;
  border-radius: 3px;
  display: inline-block;
  text-decoration: none;

  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.15);
    background-color: #2f313a;
  }
`;

function Title() {
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

            <ImAText>{data.description}</ImAText>

            <EmailButton href={"mailto:" + data.email}>
              <h4>{data.email}</h4>
            </EmailButton>
          </ScrollAnimation>
        </TextContainer>
      </LeftContainer>
    </TitleContainer>
  );
}

export default Title;
