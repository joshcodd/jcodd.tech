import React from "react";
import GlitchImage from "./GlitchImage";
import Tag from "./Tag";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 900px;
  width: 70vw;
  height: 100vh;
  align-items: center;
  margin: 0 auto 0 auto;
`;

const Title = styled.div`
  display: inline-block;
  float: right;
  width: 50%;
  font-family: "Playfair Display", serif;
  font-size: 30px;
  font-weight: 500;
  margin: 20vh 0 15px 0;
`;

const SubHeading = styled.div`
  display: block;
  float: right;
  width: 100%;
  margin: 10px 0 3px 0;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  font-weight: 100;
`;

const GlitchImageContainer = styled.div`
  display: inline-block;
  float: left;
  max-width: 400px;
  max-height: 500px;
  width: 45%;
  height: 50vw;
  margin-top: 20vh;
`;

const AboutContent = styled.div`
  display: inline-block;
  float: right;
  width: 50%;
  font-family: "EB Garamond", serif;
  line-height: 26px;
  font-size: 17px;
  font-weight: 100;
  font-style: normal;
  margin: 0 0 20px 0;
`;

const TagContainer = styled.div`
  float: right;
  width: 50%;
`;

function About() {
  return (
    <AboutContainer>
      <GlitchImageContainer>
        <GlitchImage src="/Headshot-dark.jpg" />
      </GlitchImageContainer>

      <Title> About Me </Title>
      <AboutContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </AboutContent>

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
    </AboutContainer>
  );
}

export default About;
