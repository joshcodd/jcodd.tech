import React, { useContext } from "react";
import GlitchText from "./GlitchText";
import Rocket from "./Rocket";
import styled from "styled-components";
import Rotate from "react-reveal/Rotate";
import { ColoursContext } from "./ColoursContext";

const TitleContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const LeftContainer = styled.div`
  padding-left: 15vw;
  padding-top: 45vh;
  height: 100%;
  width: 60%;
  float: left;

  box-sizing: border-box;
`;

const RocketContainer = styled.div`
  position: relative;
  padding-top: 10vh;
  width: 40%;
  height: 100%;
  float: right;
`;

const GlitchName = styled.div`
  position: relative;
  top: 15px;
`;

const ImAText = styled.p`
  position: relative;
  font-weight: 100;
  font-family: "EB Garamond", serif;
  font-size: 20px;
  opacity: 0.9;
`;

const Email = styled.div`
  display: inline-block;
  position: relative;
  top: 20px;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  padding: 5px 40px;
  font-weight: 100;
  border-bottom: 2px solid ${(props) => props.textColour};

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
    color: ${(props) => props.backgroundColour};
    height: 100%;
  }
`;

function Title() {
  const { foreground, background } = useContext(ColoursContext);

  return (
    <TitleContainer>
      <LeftContainer>
        <GlitchName>
          <GlitchText text="Hi, I'm Josh" />
        </GlitchName>

        <Rotate top left delay={400}>
          <ImAText>
            I'm a software engineer based in Swansea, Wales.
            <br />
            Focused on writing efficient, clean and readable code.
          </ImAText>
        </Rotate>
        <Rotate top left delay={800}>
          <Email textColour={foreground} backgroundColour={background}>
            jjc21@live.co.uk
          </Email>
        </Rotate>
      </LeftContainer>

      <RocketContainer>
        <Rocket />
      </RocketContainer>
    </TitleContainer>
  );
}

export default Title;
