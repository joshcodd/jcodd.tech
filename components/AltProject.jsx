import React from "react";
import Tag from "./Tag";
import styled from "styled-components";

const AltProjectContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 15px 0px;

  @media (max-width: 450px) {
    width: 100%;
  }
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

  return (
    <AltProjectContainer>
      <h2>{title}</h2>

      <ProjectDescription>{description}</ProjectDescription>

      <ProjectTagContainer>
        {tags.map((tag, index) => {
          return <Tag key={index} text={tag} />;
        })}
      </ProjectTagContainer>
    </AltProjectContainer>
  );
}

export default AltProject;
