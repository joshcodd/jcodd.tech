import React from "react";
import GlitchText from "./GlitchText";
import styled from "styled-components";
import Rotate from "react-reveal/Rotate";

const TitleContainer = styled.div`
  margin-left: 15vw;
  padding-top: 45vh;
`;

const GlitchName = styled.div`
  position: relative;
  top: 15px;
`;

const HiText = styled.span`
  position: relative;

  font-family: "EB Garamond", serif;
  font-weight: 400;
  font-size: 25px;
  top: -10px;
  opacity: 0.9;
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

function Title(props) {
  return (
    <TitleContainer style={{ color: props.textColour }}>
      <GlitchName>
        <GlitchText text="Hi, I'm Josh" darkMode={props.darkMode} />
      </GlitchName>

      <Rotate top left delay={400}>
        <ImAText>
          I'm a software engineer based in Swansea, Wales.
          <br />
          Focused on writing efficient, clean and readable code.
        </ImAText>
      </Rotate>
      <Rotate top left delay={800}>
        <Email
          textColour={props.textColour}
          backgroundColour={props.backgroundColour}
        >
          jjc21@live.co.uk
        </Email>
      </Rotate>
    </TitleContainer>
  );
}

export default Title;
