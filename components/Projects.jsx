import React from "react";
import GlitchText from "./GlitchText";
import TopProject from "./TopProject";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  width: 75vw;
  height: 100vh;
  margin: 0 auto 0 auto;
`;

const GlitchTitle = styled.div`
  position: relative;
  display: inline-block;
  margin: 90px 0 0 10px;
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
    </ProjectsContainer>
  );
}

export default Projects;
