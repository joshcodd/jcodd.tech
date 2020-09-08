import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SidebarContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 60px;
  top: 0px;
  z-index: 2;
`;

const NameLogo = styled.div`
  position: fixed;
  top: 25px;
  left: -40px;
  transform: rotate(-90deg);
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #242424;
  width: 150px;
`;

const IconList = styled.ul`
  list-style-type: none;
  position: fixed;
  bottom: 30px;
  left: -20px;
`;

const IconListItem = styled.li`
  position: relative;
  padding: 5px 10px;

  ::after {
    position: absolute;
    content: "";
    background: #242424;
    z-index: -1;
    height: 100%;
    right: 0;
    bottom: 0;
    width: 0%;

    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  :hover {
    color: white;
  }

  :hover:after {
    color: white;
    width: 100%;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin: 3.6px 0 0 0px;
  width: 20px;
  height: 20px;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <NameLogo>josh codd</NameLogo>

      <IconList>
        <IconListItem>
          <Icon icon={faGithub} size="xs" transform={{ rotate: -90 }} />
        </IconListItem>

        <IconListItem>
          <Icon icon={faLinkedin} size="xs" transform={{ rotate: -90 }} />
        </IconListItem>
      </IconList>
    </SidebarContainer>
  );
}

export default Sidebar;
