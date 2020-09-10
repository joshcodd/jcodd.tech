import React, { useContext } from "react";
import GlitchText from "./GlitchText";
import Rocket from "./Rocket";
import styled from "styled-components";
import Rotate from "react-reveal/Rotate";
import { ColoursContext } from "./ColoursContext";

const TitleContainer = styled.div`
  height: 120vh;
  width: 100vw;
  overflow: hidden;
`;

const LeftContainer = styled.div`
  height: 100%;
  width: 100vw;

  float: left;

  box-sizing: border-box;

  @media (max-width: 875px) {
  }
`;

// const RightContainer = styled.div`
//   position: relative;
//   height: 100%;

//   float: right;
//   box-sizing: border-box;
// `;

const RocketContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 15vh;
  top: 0;
  width: 20vw;
  height: 100%;
  float: left;

  @media (max-width: 1075px) {
  }
`;

const TextContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 15%;
  margin-top: 52vh;
  width: 50%;
  float: left;
`;

const ImAText = styled.p`
  position: relative;
  font-weight: 100;
  font-family: "EB Garamond", serif;
  font-size: 20px;
  opacity: 0.9;
  @media (max-width: 775px) {
    font-size: 10px;
  }
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

  @media (max-width: 775px) {
    font-size: 10px;
  }
`;

function Title() {
  const { foreground, background } = useContext(ColoursContext);

  return (
    <TitleContainer>
      <LeftContainer>
        <TextContainer>
          <GlitchText text="Hi, I'm Josh" />

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
        </TextContainer>

        <RocketContainer>
          <Rocket />
        </RocketContainer>
      </LeftContainer>

      {/* <RightContainer> */}
      {/* <RocketContainer></RocketContainer> */}
      {/* </RightContainer> */}
    </TitleContainer>
  );
}

export default Title;
