import React from "react";
import GlitchImage from "./GlitchImage";
import Tag from "./Tag";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import data from "../content/aboutMe.json";

const AboutContainer = styled.div`
  max-width: 950px;
  width: 75vw;
  align-items: center;
  margin: 0px auto;
  padding: 150px 0px;
  overflow: hidden;

  @media (max-width: 450px) {
    padding: 60px 0;
  }
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
  margin-top: 8px;
`;

const GlitchImageContainer = styled.div`
  display: inline-block;
  float: left;
  max-width: 420px;
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
    width: 95%;
  }
`;

const TagContainer = styled.div`
  width: 100%;
  display: block;
  line-height: 20.5px;
`;

function About() {
  //allow /n char in string to be a line break.
  const aboutDescription = data.description
    .split("/n")
    .map((section, index) => {
      return <p key={index}>{section}</p>;
    });

  return (
    <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
      <AboutContainer>
        <GlitchImageContainer>
          <GlitchImage src={data.imageURL} />
        </GlitchImageContainer>

        <Title> About Me </Title>
        <AboutContent>
          <div>{aboutDescription}</div>
          <TagContainer>
            <SubHeading style={{ margin: "0" }}>Languages</SubHeading>
            {data.languages.map((language, index) => {
              return <Tag key={index} text={language} />;
            })}
          </TagContainer>
          <TagContainer>
            <SubHeading>Frameworks</SubHeading>
            {data.frameworks.map((framework, index) => {
              return <Tag key={index} text={framework} />;
            })}
          </TagContainer>
          <TagContainer>
            <SubHeading>Tools</SubHeading>
            {data.tools.map((tool, index) => {
              return <Tag key={index} text={tool} />;
            })}
          </TagContainer>
        </AboutContent>
      </AboutContainer>
    </ScrollAnimation>
  );
}

export default About;
