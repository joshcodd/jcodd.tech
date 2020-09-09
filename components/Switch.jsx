import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Colours, ColoursContext } from "../components/ColoursContext";

const ModeSwitch = styled.div`
  position: relative;
  bottom: -4px;
  display: inline-block;
  width: 40px;
  height: 16px;
  border: 1px solid #242424;
  border-radius: 50px;
  background-color: #fff;
`;

const Ball = styled.div`
  margin-left: ${(props) =>
    props.coloursContext === Colours.light ? "0px" : "24px"};
  width: 14px;
  height: 14px;
  border: 1px solid #bebebe;
  border-radius: 100px;
  background-color: #e0e0e0;
  transition: all ease-out 0.5s;
`;

function Switch(props) {
  const coloursContext = useContext(ColoursContext);

  function handleClick() {
    props.setColours(
      coloursContext === Colours.light ? Colours.dark : Colours.light
    );
  }

  return (
    <ModeSwitch onClick={handleClick}>
      <Ball coloursContext={coloursContext}></Ball>
    </ModeSwitch>
  );
}

export default Switch;
