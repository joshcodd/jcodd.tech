import React from "react";
import GlitchImage from "./GlitchImage";
import Tag from "./Tag";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 900px;
  width: 75vw;
  align-items: center;
  margin: 0px auto 0px auto;

  padding: 20vh 0px;
  overflow: hidden;
`;

const Title = styled.h1`
  display: inline-block;
  float: right;
  width: 50%;

  @media (max-width: 775px) {
    display: block;
    float: none;
    margin: 0;
    width: 75%;
    margin: 0 auto;
  }

  @media (max-width: 450px) {
    width: 95%;
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
  height: auto;

  @media (max-width: 775px) {
    max-width: none;
    max-height: none;
    display: block;
    float: none;
    width: 75%;
    margin: 0 auto 20px auto;
  }

  @media (max-width: 450px) {
    width: 95%;
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
    float: none;
    width: 75%;
    margin: 0 auto;
  }

  @media (max-width: 450px) {
    width: 100%;
    color: red;
  }
`;

const TagContainer = styled.div`
  width: 100%;
  display: block;
  line-height: 20px;
`;

function About() {
  return (
    <AboutContainer>
      <GlitchImageContainer>
        <GlitchImage src="/Headshot2.jpg" />
      </GlitchImageContainer>

      <Title> About Me </Title>
      <AboutContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
  );
}

export default About;
