import React, { useContext } from "react";
import GlitchText from "./GlitchText";
import SpaceScene from "./SpaceScene";
import HoverButton from "./HoverButton";
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

const EmailButton = styled(HoverButton)`
  top: 20px;
  padding: 5px 40px;
  border-bottom: 2px solid #242424;
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
