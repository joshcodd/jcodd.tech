import React, { useEffect } from "react";
import GlitchImage from "./GlitchImage";
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
  font-family: "Nunito", sans-serif;
  font-size: 25px;
  font-weight: 100;
  margin-top: 20vh;
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
  font-family: "Nunito", sans-serif;
  font-size: 15px;
  font-weight: 100;
  margin: 0 0 20px 0;
`;

const Tag = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px 10px;
  margin: 0 7px 5px 0;

  font-family: "Nunito", sans-serif;
  font-size: 13px;
  font-weight: 100;
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
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </AboutContent>

      <TagContainer>
        <SubHeading>Languages</SubHeading>
        <Tag>Java</Tag>
        <Tag>Javascript</Tag>
        <Tag>React</Tag>
        <Tag>Git</Tag>
        <Tag>Javsdfsfda</Tag>
        <Tag>Javdfascript</Tag>
        <Tag>Readct</Tag>
        <Tag>Git</Tag>
      </TagContainer>

      <TagContainer>
        <SubHeading>Frameworks</SubHeading>
        <Tag>Neewext JS</Tag>
        <Tag>Jawewva</Tag>
        <Tag>Jadwvascript</Tag>
        <Tag>Reewact</Tag>
      </TagContainer>

      <TagContainer>
        <SubHeading>Tools</SubHeading>
        <Tag>Neewext JS</Tag>
        <Tag>Jawewva</Tag>
      </TagContainer>
    </AboutContainer>
  );
}

export default About;
