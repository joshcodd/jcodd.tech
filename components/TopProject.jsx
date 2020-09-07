import React from "react";
import Tag from "./Tag";
import styled from "styled-components";

const TopProjectContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 60px auto 100px auto;
`;

const ProjectImage = styled.img`
  display: inline-block;
  position: relative;
  width: 50%;
  height: auto;
  border-radius: 10px;
  float: ${(props) => (props.float === "right" ? "right" : "left")};

  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
`;

const ProjectContent = styled.div`
  width: 35%;
  float: ${(props) => (props.float === "right" ? "right" : "left")};
  text-align: ${(props) => (props.float === "right" ? "right" : "left")};
  border-radius: 5px;
`;

const ProjectTitle = styled.div`
  display: inline-block;
  font-family: "Playfair Display", serif;
  font-weight: 100;
  font-size: 25px;
`;

const ProjectDescription = styled.p`
  line-height: 26px;
  display: inline-block;
  margin: 20px 0 0 0;
`;

const ProjectTagContainer = styled.div`
  margin: 30px 0 0 0;
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
