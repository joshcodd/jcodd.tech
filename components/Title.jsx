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

const SpaceStyled = styled(SpaceScene)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  opacity: 0.7;
  overflow: hidden;
`;

const TextContainer = styled.div`
  position: absolute;
  margin-left: 15vw;
  top: 39vh;
  width: 45%;
  max-width: 600px;
  float: left;

  @media (max-width: 1050px) {
    top: 60vh;
    margin-left: 10vw;
    width: 50%;
  }

  @media (max-width: 600px) {
    margin-left: 5%;
    width: 75%;
  }
`;

const Description = styled.p`
  position: relative;
  top: -5px;
  opacity: 0.9;
  margin: 10px 0 15px 0;
  width: 100%;
`;

const Email = styled.a`
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
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.15);
  }
`;

function Title() {
  return (
    <TitleContainer>
      <div style={{ visibility: "hidden", position: "absolute" }}>Anchor</div>
      <SpaceStyled />
      <TextContainer>
        <ScrollAnimation
          animateIn="animate__backInDown"
          duration={2}
          animateOnce={true}
        >
          <GlitchText text="Hi, I'm Josh" />
          <Description>{data.description}</Description>
          <Email href={"mailto:" + data.email}>
            <h4>{data.email}</h4>
          </Email>
        </ScrollAnimation>
      </TextContainer>
    </TitleContainer>
  );
}

export default Title;
