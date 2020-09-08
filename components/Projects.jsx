import React from "react";
import GlitchText from "./GlitchText";
import TopProject from "./TopProject";
import AltProject from "./AltProject";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Rotate from "react-reveal/Rotate";

const ProjectsContainer = styled.div`
  width: 75vw;
  margin: 0 auto 0 auto;
  padding: 150px 0;
`;

const GlitchTitle = styled.div`
  position: relative;
  display: inline-block;
`;

const Title = styled.h1`
  margin: 150px 0 0 0;
  font-family: "Nunito", sans-serif;
  font-weight: 100;
  font-size: 20px;
  text-align: center;
`;

function Projects() {
  return (
    <ProjectsContainer>
      <Slide right>
        <GlitchTitle>
          <GlitchText text="Projects" />
        </GlitchTitle>
      </Slide>

      <Fade delay={100}>
        <TopProject
          title="Listening Habits"
          img="/ListeningHabits.jpg"
          float="right"
          tags={["JavaScript", "React"]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam
          lacus suspendisse faucibus interdum posuere lorem ipsum. Ultrices dui
          sapien eget mi proin sed libero. Consequat id porta nibh
        </TopProject>
      </Fade>

      <Fade delay={200}>
        <TopProject
          title="Sorting Visualizer"
          img="/SortingVisualizer.jpg"
          float="left"
          tags={["JavaScript", "React"]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam
          lacus suspendisse faucibus interdum posuere lorem ipsum. Ultrices dui
          sapien eget mi proin sed libero. Consequat id porta nibh
        </TopProject>
      </Fade>

      <Fade delay={200}>
        <Title> Other Projects </Title>

        <AltProject title="Personal Website" tags={["JavaScript", "React"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam
          lacus suspendisse faucibus interdum posuere lorem ipsum. Ultrices dui
          sapien eget mi proin sed libero. Consequat id porta nibh
        </AltProject>

        <AltProject title="Personal Website" tags={["JavaScript", "React"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam
          lacus suspendisse faucibus interdum posuere lorem ipsum. Ultrices dui
          sapien eget mi proin sed libero. Consequat id porta nibh
        </AltProject>

        <AltProject title="Personal Website" tags={["JavaScript", "React"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam
          lacus suspendisse faucibus interdum posuere lorem ipsum. Ultrices dui
          sapien eget mi proin sed libero. Consequat id porta nibh
        </AltProject>

        <AltProject title="Personal Website" tags={["JavaScript", "React"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam
          lacus suspendisse faucibus interdum posuere lorem ipsum. Ultrices dui
          sapien eget mi proin sed libero. Consequat id porta nibh
        </AltProject>
      </Fade>
    </ProjectsContainer>
  );
}

export default Projects;
