import React from "react";
import styled from "styled-components";

const RocketContainer = styled.div`
  display: inline-block;
  position: relative;
  transform: rotate(-45deg);
  width: 40%;
`;

const RocketImage = styled.img`
  position: relative;
  top: 0px;
  left: 0px;
  height: auto;
  width: 100%;
`;

const BoosterImage = styled.img`
  position: absolute;
  top: 83%;
  left: 0px;
  right: 0px;
  height: auto;
  width: 100%;
`;

function Sphere() {
  return (
    <RocketContainer>
      <RocketImage src="rocket-size.svg" />
      <BoosterImage src="rocket-short.svg" />
    </RocketContainer>
  );
}

export default Sphere;
