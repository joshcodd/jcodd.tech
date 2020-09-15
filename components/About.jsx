import React from "react";
import GlitchImage from "./GlitchImage";
import Tag from "./Tag";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const AboutContainer = styled.div`
  max-width: 900px;
  width: 70vw;
  height: 100vh;
  align-items: center;
  margin: 0 auto 0 auto;
`;

const Title = styled.h1`
  display: inline-block;
  float: right;
  width: 50%;
  margin: 20vh 0 0 0;

  @media (max-width: 775px) {
    display: block;
    float: none;
    margin: 0;
    width: 90%;
    margin: 0 auto;
  }
`;

const SubHeading = styled.h3`
  display: block;
  float: right;
  width: 100%;
  margin: 10px 0 3px 0;
`;

const GlitchImageContainer = styled.div`
  display: inline-block;
  float: left;
  max-width: 400px;
  max-height: 500px;
  width: 45%;
  height: 50vw;
  margin-top: 20vh;

  @media (max-width: 775px) {
    display: block;
    float: none;
    width: 60%;
    margin: 20vh auto 20px auto;
  }
`;

const AboutContent = styled.div`
  display: inline-block;
  float: right;
  height: 100%;
  width: 50%;
  margin: 0 0 20px 0;

  @media (max-width: 775px) {
    display: block;
    height: 50%;
    float: none;
    width: 90%;
    margin: 0 auto;
  }
`;

const TagContainer = styled.div`
  width: 100%;
  display: block;
  line-height: 20px;
`;

function About() {
  return (
    <Fade delay={200}>
      <AboutContainer>
        <GlitchImageContainer>
          <GlitchImage src="/Headshot2.jpg" />
        </GlitchImageContainer>

        <Title> About Me </Title>
        <AboutContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <TagContainer>
            <SubHeading>Languages</SubHeading>
            <Tag text="Java" />
            <Tag text="Java" />
            <Tag text="Java" />
            <Tag text="Java" />
            <Tag text="Java" />
            <Tag text="Java" />
            <Tag text="Java" />
            <Tag text="Java" />
          </TagContainer>
          <TagContainer>
            <SubHeading>Frameworks</SubHeading>
            <Tag text="Java" />
            <Tag text="Java" />
            <Tag text="Java" />
            <Tag text="Java" />
          </TagContainer>
          <TagContainer>
            <SubHeading>Tools</SubHeading>
            <Tag text="Java" />
            <Tag text="Java" />
          </TagContainer>
        </AboutContent>
      </AboutContainer>
    </Fade>
  );
}

export default About;
