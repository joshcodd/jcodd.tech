import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Slide from "react-reveal/Slide";

const SidebarContainer = styled.div`
  position: fixed;
  left: 0px;
  height: 100vh;
  width: 60px;
  top: 0px;
  z-index: 2;

  -webkit-transition: all 1.5s;
  -moz-transition: all 1.5s;
  -o-transition: all 1.5s;
  transition: all 1.5s;
`;

const NameLogo = styled.div`
  position: relative;
  top: 25px;
  left: -40px;
  transform: rotate(-90deg);
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 18px;

  width: 150px;
`;

const IconList = styled.ul`
  list-style-type: none;
  position: absolute;
  bottom: 0px;
  left: -20px;
`;

const IconListItem = styled.li`
  position: relative;
  padding: 5px 10px;

  ::after {
    position: absolute;
    content: "";
    background: ${(props) => props.textColour};
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
    color: ${(props) => props.backgroundColour};
  }

  :hover:after {
    color: ${(props) => props.backgroundColour};
    width: 100%;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin: 3.6px 0 0 0px;
  width: 20px;
  height: 20px;
`;

function Sidebar(props) {
  return (
    <Slide left duration={1000} delay={1300}>
      <SidebarContainer style={{ color: props.textColour }}>
        <NameLogo>josh codd</NameLogo>

        <IconList>
          <IconListItem
            textColour={props.textColour}
            backgroundColour={props.backgroundColour}
          >
            <Icon icon={faGithub} size="xs" transform={{ rotate: -90 }} />
          </IconListItem>

          <IconListItem
            textColour={props.textColour}
            backgroundColour={props.backgroundColour}
          >
            <Icon icon={faLinkedin} size="xs" transform={{ rotate: -90 }} />
          </IconListItem>
        </IconList>
      </SidebarContainer>
    </Slide>
  );
}

export default Sidebar;
