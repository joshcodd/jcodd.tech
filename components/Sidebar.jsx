import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HoverButton from "./HoverButton";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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

  @media (max-width: 600px) {
    display: none;
  }
`;

const NameLogo = styled.a`
  position: absolute;
  text-decoration: none;
  top: 25px;
  left: -35px;
  transform: rotate(-90deg);
  color: #242424;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 18px;
  width: 150px;
`;

const IconList = styled.ul`
  list-style-type: none;
  position: absolute;
  bottom: 0px;
  padding: 0px;
  left: 19px;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  font-size: 20px;
`;

const IconContainer = styled(HoverButton)`
  transform: rotate(-90deg);
  padding: 10px 9px 5px 9px;
`;

function Sidebar(props) {
  const startingPosition = props.animate ? "-100vw" : "0";
  const [position, setPostion] = useState(startingPosition);

  useEffect(() => {
    setTimeout(() => setPostion("0"), 2400);
  });

  return (
    <SidebarContainer position={position}>
      <Link href="/#">
        <NameLogo>josh codd</NameLogo>
      </Link>

      <IconList>
        <li>
          <IconContainer href="https://github.com/joshcodd">
            <Icon icon={faGithub} />
          </IconContainer>
        </li>

        <li>
          <IconContainer href="https://www.linkedin.com/in/joshcodd/">
            <Icon icon={faLinkedin} />
          </IconContainer>
        </li>
      </IconList>
    </SidebarContainer>
  );
}

export default Sidebar;
