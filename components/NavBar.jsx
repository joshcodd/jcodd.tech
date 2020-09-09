import React, { useContext } from "react";
import styled from "styled-components";
import Switch from "./Switch";
import Slide from "react-reveal/Slide";
import { ColoursContext } from "./ColoursContext";

const Navbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: white;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    ${(props) => props.backgroundColour} 100%
  );
`;

const NavList = styled.ul`
  position: relative;
  top: 35px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  float: right;
  color: ${(props) => props.textColour};
`;

const NavItem = styled.li`
  display: inline-block;
  font-size: 15px;
  margin: 0 60px 0 0;
  font-family: "Nunito", sans-serif;
  font-weight: 100;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.textColour};
`;

const TopHalf = styled.div`
  position: absolute;
  clip-path: inset(0% 0% 50% 0px);
  ${NavItem}:hover & {
    transform: translate(7.5px, 0px);
  }
`;

const BottomHalf = styled.div`
  position: relative;
  clip-path: inset(50% 0px 0px 0px);
  ${NavItem}:hover & {
    left: -5px;
  }
`;

function NavBar(props) {
  const { foreground, background } = useContext(ColoursContext);

  return (
    <Navbar backgroundColour={background}>
      <Slide right duration={1000} delay={1300}>
        <NavList textColour={foreground}>
          <NavItem href="#about">
            <Link href="#about" textColour={foreground}>
              <TopHalf>ABOUT</TopHalf>
              <BottomHalf>ABOUT</BottomHalf>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#projects" textColour={foreground}>
              <TopHalf> PROJECTS</TopHalf>
              <BottomHalf>PROJECTS</BottomHalf>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#" textColour={foreground}>
              <TopHalf>CONTACT</TopHalf>
              <BottomHalf>CONTACT</BottomHalf>
            </Link>
          </NavItem>
          <NavItem>
            <Switch setColours={props.setColours} />
          </NavItem>
        </NavList>
      </Slide>
    </Navbar>
  );
}

export default NavBar;
