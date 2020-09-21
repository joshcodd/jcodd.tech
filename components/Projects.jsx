import React from "react";
import GlitchText from "./GlitchText";
import TopProject from "./TopProject";
import AltProject from "./AltProject";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const ProjectsContainer = styled.div`
  width: 75vw;
  margin: 0 auto;
  padding: 150px 0;

  @media (max-width: 450px) {
    padding: 60px 0;
  }
`;

const GlitchTitle = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 40px;

  @media (max-width: 775px) {
    margin-bottom: 25px;
  }
`;

const SubHeading = styled.h3`
  margin: 130px 0 0 0;
  text-align: center;

  @media (max-width: 450px) {
    margin: 80px 0 0 0;
  }
`;

function Projects() {
  return (
    <ProjectsContainer>
      <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
        <GlitchTitle>
          <GlitchText text="Projects" />
        </GlitchTitle>
      </ScrollAnimation>

      <TopProject
        title="Listening Habits"
        img="/ListeningHabits.jpg"
        float="right"
        tags={["JavaScript", "React"]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non quam lacus
      </TopProject>

      <TopProject
        title="Sorting Visualizer"
        img="/SortingVisualizer.jpg"
        float="left"
        tags={["JavaScript", "React"]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non quam lacus
      </TopProject>

      <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
        <SubHeading> Other Projects </SubHeading>
      </ScrollAnimation>

      <AltProject title="Personal Website" tags={["JavaScript", "React"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non quam lacus
        suspendisse faucibus interdum posuere lorem ipsum. Ultrices dui sapien
        eget mi proin sed libero. Consequat id porta nibh
      </AltProject>

      <AltProject title="Personal Website" tags={["JavaScript", "React"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non quam lacus
        suspendisse faucibus interdum posuere lorem ipsum. Ultrices dui sapien
        eget mi proin sed libero. Consequat id porta nibh
      </AltProject>

      <AltProject title="Personal Website" tags={["JavaScript", "React"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non quam lacus
        suspendisse faucibus interdum posuere lorem ipsum. Ultrices dui sapien
        eget mi proin sed libero. Consequat id porta nibh
      </AltProject>

      <AltProject title="Personal Website" tags={["JavaScript", "React"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non quam lacus
        suspendisse faucibus interdum posuere lorem ipsum. Ultrices dui sapien
        eget mi proin sed libero. Consequat id porta nibh
      </AltProject>
    </ProjectsContainer>
  );
}

export default Projects;
