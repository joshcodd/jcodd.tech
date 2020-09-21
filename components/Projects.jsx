import React from "react";
import GlitchText from "./GlitchText";
import TopProject from "./TopProject";
import AltProject from "./AltProject";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import data from "../content/projects.json";

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

      {data.topProjects.map((topProject, index) => {
        return (
          <TopProject
            key={index}
            title={topProject.title}
            img={topProject.imageUrl}
            float={topProject.float}
            tags={topProject.tags}
            githubRepo={topProject.githubRepo}
          >
            {topProject.description}
          </TopProject>
        );
      })}

      <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
        <SubHeading> Other Projects </SubHeading>
      </ScrollAnimation>

      {data.otherProjects.map((otherProject, index) => {
        return (
          <AltProject
            key={index}
            title={otherProject.title}
            tags={otherProject.tags}
            githubRepo={otherProject.githubRepo}
          >
            {otherProject.description}
          </AltProject>
        );
      })}
    </ProjectsContainer>
  );
}

export default Projects;
