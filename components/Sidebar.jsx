import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ColoursContext } from "./ColoursContext";

const SidebarContainer = styled.div`
  position: fixed;
  left: ${(props) => props.position};
  height: 100vh;
  width: 60px;
  top: 0px;
  z-index: 200;

  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;

  @media (max-width: 450px) {
    display: none;
  }
`;

const NameLogo = styled.div`
  position: relative;
  top: 25px;
  left: -35px;
  transform: rotate(-90deg);
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 18px;
  width: 150px;
`;

const IconList = styled.ul`
  list-style-type: none;
  position: fixed;
  bottom: 0px;
  left: -20px;
`;

const IconListItem = styled.li`
  position: relative;
  padding: 5px 10px;
  left: ${(props) => props.position};

  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;

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

function Sidebar() {
  const { foreground, background } = useContext(ColoursContext);
  const [position, setPostion] = useState("-100vw");

  useEffect(() => {
    setTimeout(() => setPostion("0"), 2000);
  });

  return (
    <SidebarContainer position={position}>
      <NameLogo>josh codd</NameLogo>

      <IconList>
        <IconListItem
          textColour={foreground}
          backgroundColour={background}
          position={position}
        >
          <Icon icon={faGithub} size="xs" transform={{ rotate: -90 }} />
        </IconListItem>

        <IconListItem
          textColour={foreground}
          backgroundColour={background}
          position={position}
        >
          <Icon icon={faLinkedin} size="xs" transform={{ rotate: -90 }} />
        </IconListItem>
      </IconList>
    </SidebarContainer>
  );
}

export default Sidebar;
