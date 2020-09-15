import React from "react";
import styled from "styled-components";

const SideBarMenuStyle = styled.div`
  @media (max-width: 450px) {
    left: ${(props) => (props.isVisible ? "0vw" : "60vw")};
    position: fixed;
    background-color: black;
    height: 100vh;
    width: 60vw;
    float: right;
    z-index: 100;
    margin-left: 40vw;

    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
  }
`;

function SideBarMenu(props) {
  const isVisible = props.visible;
  return <SideBarMenuStyle isVisible={isVisible}> </SideBarMenuStyle>;
}

export default SideBarMenu;
