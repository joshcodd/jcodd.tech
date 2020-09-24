import React from "react";
import Tag from "./Tag";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import HoverButton from "./HoverButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

const AltProjectContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 15px 0px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const HoverButtonStyled = styled(HoverButton)`
  position: relative;
  top: 1px;
  padding: 5px;
  font-size: 22px;
  line-height: 22px;
`;

const Icons = styled.span`
  white-space: nowrap;
  margin-left: 15px;
`;

const ProjectDescription = styled.p`
  font-family: "Nunito", sans-serif;
  margin: 5px 0 12px 0px;
`;

function AltProject(props) {
  const title = props.title;
  const description = props.children;
  const tags = props.tags || [];
  const githubRepo = props.githubRepo;

  return (
    <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
      <AltProjectContainer>
        <h3 style={{ display: "inline-block" }}>{title}</h3>

        <Icons>
          <HoverButtonStyled href={githubRepo}>
            <FontAwesomeIcon icon={faGithub} />
          </HoverButtonStyled>

          <HoverButtonStyled href={githubRepo}>
            <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
          </HoverButtonStyled>
        </Icons>

        <ProjectDescription>{description}</ProjectDescription>

        {tags.map((tag, index) => {
          return <Tag key={index} text={tag} />;
        })}
      </AltProjectContainer>
    </ScrollAnimation>
  );
}

export default AltProject;
