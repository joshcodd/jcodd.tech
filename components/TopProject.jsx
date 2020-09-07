import React from "react";
import Tag from "./Tag";
import styled from "styled-components";

const TopProjectContainer = styled.div`
  width: 80%;
  height: 300px;
  margin: 0px auto 80px auto;
`;

const ProjectTitle = styled.div`
  display: inline-block;
  padding: 20px 80px;
  border-radius: 2px;
  background-color: white;
  font-family: "Nunito", sans-serif;
  font-weight: 100;
  font-size: 25px;
  background-color: #2f2f2f;
  float: ${(props) => (props.float === "right" ? "right" : "left")};
  color: #fff;
`;

const ProjectImage = styled.img`
  display: inline-block;
  position: relative;
  width: 50%;
  height: auto;
  border-radius: 5px;
  float: ${(props) => (props.float === "right" ? "right" : "left")};
`;

const ProjectDescription = styled.p`
  display: inline-block;
  width: 40%;
  margin: 30px 0 0 0;
  float: ${(props) => (props.float === "right" ? "right" : "left")};
  text-align: ${(props) => (props.float === "right" ? "right" : "left")};
`;

const ProjectTagContainer = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  justify-content: flex-end;
  float: ${(props) => (props.float === "right" ? "right" : "left")};
  width: 40%;
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
      <ProjectTitle float={textFloat}>{title}</ProjectTitle>

      <ProjectImage src={imageSrc} float={imageFloat}></ProjectImage>

      <ProjectDescription float={textFloat}>{description}</ProjectDescription>

      <ProjectTagContainer float={textFloat}>
        {tags.map((tag, index) => {
          return <Tag key={index} text={tag} />;
        })}
      </ProjectTagContainer>
    </TopProjectContainer>
  );
}

export default TopProject;
