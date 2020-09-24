import React from "react";
import Tag from "./Tag";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import HoverButton from "./HoverButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

const TopProjectContainer = styled.div`
  width: 100%;
  margin: 0px auto 100px auto;
  overflow: hidden;

  @media (max-width: 450px) {
    margin: 0px auto 50px auto;
  }
`;

const ProjectImage = styled.img`
  display: inline-block;
  position: relative;
  width: 50%;

  border-radius: 10px;
  float: ${(props) => (props.float === "right" ? "right" : "left")};
  position: relative;
  filter: grayscale(100%) contrast(1);

  @media (max-width: 775px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ProjectContent = styled.div`
  width: 40%;
  float: ${(props) => (props.float === "right" ? "right" : "left")};
  text-align: ${(props) => (props.float === "right" ? "right" : "left")};
  border-radius: 5px;

  @media (max-width: 775px) {
    width: 100%;
    text-align: left;
  }
`;

const ProjectTitle = styled.h2`
  display: inline-block;
  margin-right: 15px;
`;

const HoverButtonStyled = styled(HoverButton)`
  font-size: 25px;
  padding: 7px;
  line-height: 25px;

  @media (max-width: 775px) {
    float: right;
  }
`;

const Icons = styled.span`
  white-space: nowrap;
  margin-left: 15px;
`;

const ProjectDescription = styled.p`
  display: block;
`;

const ProjectTagContainer = styled.div`
  @media (max-width: 775px) {
    margin: 0;
  }
`;

function TopProject(props) {
  const textFloat = props.float;
  const imageFloat = textFloat === "right" ? "left" : "right";
  const title = props.title;
  const imageSrc = props.img;
  const description = props.children;
  const tags = props.tags || [];
  const githubRepo = props.githubRepo;
  const alt = props.alt;

  return (
    <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
      <TopProjectContainer>
        <ProjectImage
          src={imageSrc}
          float={imageFloat}
          alt={alt}
        ></ProjectImage>

        <ProjectContent float={textFloat}>
          <ProjectTitle>
            {title}

            <Icons>
              <HoverButtonStyled href={githubRepo}>
                <FontAwesomeIcon icon={faGithub} />
              </HoverButtonStyled>

              <HoverButtonStyled href={githubRepo}>
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
              </HoverButtonStyled>
            </Icons>
          </ProjectTitle>

          <ProjectDescription float={textFloat}>
            {description}
          </ProjectDescription>

          <ProjectTagContainer float={textFloat}>
            {tags.map((tag, index) => {
              return <Tag key={index} text={tag} />;
            })}
          </ProjectTagContainer>
        </ProjectContent>
      </TopProjectContainer>
    </ScrollAnimation>
  );
}

export default TopProject;
