import React from "react";
import GlitchText from "./GlitchText";
import TopProject from "./TopProject";
import AltProject from "./AltProject";
import styled from "styled-components";

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
  font-family: "Nunito", sans-serif;
  font-weight: 100;
  font-size: 20px;
  text-align: center;
`;

function Projects() {
  return (
    <ProjectsContainer>
      <GlitchTitle>
        <GlitchText text="Projects" />
      </GlitchTitle>

      <TopProject
        title="Listening Habits"
        img="/ListeningHabits.jpg"
        float="right"
        tags={["JavaScript", "React"]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non quam lacus
        suspendisse faucibus interdum posuere lorem ipsum. Ultrices dui sapien
        eget mi proin sed libero. Consequat id porta nibh
      </TopProject>

      <TopProject
        title="Sorting Visualizer"
        img="/SortingVisualizer.jpg"
        float="left"
        tags={["JavaScript", "React"]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non quam lacus
        suspendisse faucibus interdum posuere lorem ipsum. Ultrices dui sapien
        eget mi proin sed libero. Consequat id porta nibh
      </TopProject>

      <Title> Other Projects </Title>

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
