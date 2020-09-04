import React, { useEffect } from "react";
import GlitchImage from "./GlitchImage";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 900px;
  width: 70vw;
  height: 80vh;
  align-items: center;
  margin: 0 auto 0 auto;
  padding-top: 20vh;
`;

const Title = styled.div`
  display: inline-block;
  margin-left: 4vw;

  font-family: "Nunito", sans-serif;
  font-size: 25px;
  font-weight: 100;
`;

const GlitchImageContainer = styled.div`
  display: inline-block;
  float: left;
  max-width: 400px;
  max-height: 500px;
  width: 40vw;
  height: 50vw;
`;

function About() {
  return (
    <AboutContainer>
      <Title> About Me </Title>
      <GlitchImageContainer>
        <GlitchImage src="/Headshot-dark.jpg" />
      </GlitchImageContainer>
    </AboutContainer>
  );
}

export default About;
