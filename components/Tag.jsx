import React from "react";
import styled from "styled-components";

const TagStyle = styled.div`
  display: inline-block;
  border: 1px solid;
  border-radius: 5px;
  padding: 2px 10px;
  margin: 0 7px 5px 0;

  font-family: "Nunito", sans-serif;
  font-size: 13px;
  font-weight: 100;
`;

function Tag(props) {
  return <TagStyle>{props.text}</TagStyle>;
}

export default Tag;
