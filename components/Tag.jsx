import React from "react";
import styled from "styled-components";

const TagStyled = styled.h5`
  display: inline-block;
  border: 1px solid;
  border-radius: 5px;
  padding: 1px 10px;
  margin: 5px 7px 5px 0;
`;

function Tag(props) {
  return <TagStyled>{props.text}</TagStyled>;
}

export default Tag;
