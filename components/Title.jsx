import React from "react";
import GlitchText from "./GlitchText";
import styled from "styled-components";
import Rotate from "react-reveal/Rotate";

const TitleContainer = styled.div`
  margin-left: 15vw;
  padding-top: 35vh;
`;

const GlitchName = styled.div`
  position: relative;
  margin-left: 90px;
`;

const HiText = styled.span`
  position: relative;
  font-family: "EB Garamond", serif;
  font-weight: 400;
  font-size: 25px;
  top: 110px;
  opacity: 0.9;
`;

const ImAText = styled.span`
  position: relative;
  display: block;
  font-weight: 100;
  font-family: "EB Garamond", serif;
  font-size: 25px;
  opacity: 0.9;
`;

const Email = styled.div`
  display: inline-block;
  position: relative;
  top: 40px;
  font-family: "Nunito", sans-serif;
  font-size: 19px;
  padding: 5px 40px;
  font-weight: 100;
  border-bottom: 2px solid #2f2f2f;
  color: #242424;

  ::after {
    position: absolute;
    content: "";
    background: #242424;
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
    color: white;
  }

  :hover:after {
    color: white;
    height: 100%;
  }
`;

function Title() {
  return (
    <TitleContainer>
      <Rotate top left>
        <HiText>Hi, I'm</HiText>
      </Rotate>

      <Rotate top left delay={200}>
        <GlitchName>
          <GlitchText text="Josh" />
        </GlitchName>
      </Rotate>

      <Rotate top left delay={400}>
        <ImAText>I'm a software engineer based in Swansea, Wales.</ImAText>
      </Rotate>
      <Rotate top left delay={600}>
        <ImAText>
          Focused on writing efficient, clean and readable code.
        </ImAText>
      </Rotate>
      <Rotate top left delay={800}>
        <Email>jjc21@live.co.uk</Email>
      </Rotate>
    </TitleContainer>
  );
}

export default Title;
