import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import HoverSplit from "./HoverSplit";
import Switch from "./Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ColoursContext } from "./ColoursContext";

const Navbar = styled.div`
  position: fixed;
  left: ${(props) => (props.mobileMenu ? "-60vw" : props.navPosition)};
  top: 0;
  width: 100%;
  height: 100px;
  background-color: white;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    ${(props) => props.backgroundColour} 100%
  );
  z-index: 150;

  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`;

const NavList = styled.ul`
  position: relative;
  top: 35px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  float: right;
  color: ${(props) => props.textColour};

  @media (max-width: 600px) {
    display: none;
  }
`;

const NavItem = styled.li`
  display: inline-block;
  font-size: 15px;
  margin: 0 50px 0 0;
  font-family: "Nunito", sans-serif;
  font-weight: 300;
`;

const BoxLink = styled.div`
  padding: 0px 30px;
  border: 1px solid #242424;

  -webkit-transition: color 0.2s ease-in-out;
  -moz-transition: color 0.2s ease-in-out;
  -o-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;

  ${NavItem}:hover & {
    color: white;
    background: #242424;
  }
`;

const NavListMobile = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

const NameLogo = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #242424;
  font-family: "nunito", serif;
  font-size: 20px;
  font-weight: 700px;
  margin: 5% 0 0 5%;
  float: left;
`;

const MenuButton = styled(FontAwesomeIcon)`
  height: 22px;
  width: 25px;
  margin: 6% 5% 0 0;
  float: right;
`;

function NavBar(props) {
  const [navPosition, setNavPostion] = useState("100vw");
  const { foreground, background } = useContext(ColoursContext);

  useEffect(() => {
    setTimeout(() => setNavPostion("0"), 2500);
  });

  function handleMenuClick() {
    props.setMobileMenu(props.mobileMenu ? false : true);
  }

  return (
    <Navbar
      backgroundColour={background}
      mobileMenu={props.mobileMenu}
      navPosition={navPosition}
    >
      <NavList>
        <NavItem>
          <HoverSplit href={"/#about"}>ABOUT</HoverSplit>
        </NavItem>
        <NavItem>
          <HoverSplit href={"/#projects"}>PROJECTS</HoverSplit>
        </NavItem>
        <NavItem>
          <HoverSplit href={"/#"}>CONTACT</HoverSplit>
        </NavItem>
        <NavItem>
          <HoverSplit href={"/#"}>
            <BoxLink>CV</BoxLink>
          </HoverSplit>
        </NavItem>
        <NavItem style={{ display: "none" }}>
          <Switch setColours={props.setColours} />
        </NavItem>
      </NavList>

      <NavListMobile>
        <Link href="/#">
          <NameLogo>josh codd</NameLogo>
        </Link>

        <MenuButton icon={faBars} onClick={handleMenuClick} size={"2x"} />
      </NavListMobile>
    </Navbar>
  );
}

export default NavBar;
