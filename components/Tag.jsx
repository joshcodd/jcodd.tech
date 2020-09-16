import React from "react";
import styled from "styled-components";

const TagStyle = styled.h4`
  display: inline-block;
  border: 1px solid;
  border-radius: 5px;
  padding: 0px 10px;
  margin: 5px 7px 5px 0;
`;

function Tag(props) {
  return <TagStyle>{props.text}</TagStyle>;
}

export default Tag;
