import React from "react";
import Tag from "./Tag";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import HoverButton from "./HoverButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const AltProjectContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 15px 0px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const HoverButtonStyled = styled(HoverButton)`
  display: inline-block;
  position: relative;
  top: 1px;
  height: 17px;
  width: 17px;
  padding: 4px 5px;
  margin-left: 10px;

  font-size: 18px;
`;

const ProjectDescription = styled.p`
  font-family: "Nunito", sans-serif;
  margin: 5px 0 12px 0px;
`;

const ProjectTagContainer = styled.div``;

function AltProject(props) {
  const title = props.title;
  const description = props.children;
  const tags = props.tags || [];
  const githubRepo = props.githubRepo;

  return (
    <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
      <AltProjectContainer>
        <h3 style={{ display: "inline-block" }}>{title}</h3>
        <HoverButtonStyled href={githubRepo}>
          <FontAwesomeIcon icon={faGithub} />
        </HoverButtonStyled>

        <ProjectDescription>{description}</ProjectDescription>

        <ProjectTagContainer>
          {tags.map((tag, index) => {
            return <Tag key={index} text={tag} />;
          })}
        </ProjectTagContainer>
      </AltProjectContainer>
    </ScrollAnimation>
  );
}

export default AltProject;
