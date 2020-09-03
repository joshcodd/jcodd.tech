import React, { useState } from "react";
import styled from "styled-components";

const ModeSwitch = styled.div`
  position: relative;
  bottom: -4px;
  display: inline-block;
  width: 40px;
  height: 16px;
  border: 1px solid black;
  border-radius: 50px;
  background-color: #fff;
`;

const Ball = styled.div`
  margin-left: ${(props) => (props.switchValue === "light" ? "24px" : "0px")};
  width: 14px;
  height: 14px;
  border: 1px solid #bebebe;
  border-radius: 100px;
  background-color: #e0e0e0;
  transition: all ease-out 0.5s;
`;

function Switch() {
  const [switchValue, setSwitchValue] = useState("light");

  function handleClick() {
    const value = switchValue === "light" ? "dark" : "light";
    setSwitchValue(value);
  }

  return (
    <ModeSwitch onClick={handleClick}>
      <Ball switchValue={switchValue}></Ball>
    </ModeSwitch>
  );
}

export default Switch;
