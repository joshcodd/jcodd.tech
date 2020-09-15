import React from "react";
import Tag from "./Tag";
import styled from "styled-components";

const TopProjectContainer = styled.div`
  width: 100%;
  margin: 0px auto 100px auto;
  overflow: hidden;
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
  width: 35%;
  float: ${(props) => (props.float === "right" ? "right" : "left")};
  text-align: ${(props) => (props.float === "right" ? "right" : "left")};
  border-radius: 5px;

  @media (max-width: 775px) {
    width: 100%;
    text-align: left;
  }
`;

const ProjectTitle = styled.h1`
  display: inline-block;
`;

const ProjectDescription = styled.p`
  display: inline-block;
`;

const ProjectTagContainer = styled.div`
  margin: 30px 0 0 0;

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

  return (
    <TopProjectContainer>
      <ProjectImage src={imageSrc} float={imageFloat}></ProjectImage>

      <ProjectContent float={textFloat}>
        <ProjectTitle float={textFloat}>{title}</ProjectTitle>

        <ProjectDescription float={textFloat}>{description}</ProjectDescription>

        <ProjectTagContainer float={textFloat}>
          {tags.map((tag, index) => {
            return <Tag key={index} text={tag} />;
          })}
        </ProjectTagContainer>
      </ProjectContent>
    </TopProjectContainer>
  );
}

export default TopProject;
