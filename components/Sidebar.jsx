import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 60px;
  top: 0px;
`;

const NameLogo = styled.div`
  position: fixed;
  top: 25px;
  left: -40px;
  transform: rotate(-90deg);
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 18px;
  width: 150px;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <NameLogo>josh codd</NameLogo>
    </SidebarContainer>
  );
}

export default Sidebar;
