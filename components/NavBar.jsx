import React, { useContext } from "react";
import styled from "styled-components";
import Switch from "./Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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

  @media (max-width: 450px) {
    display: none;
  }
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

const NavListMobile = styled.div`
  display: none;

  @media (max-width: 450px) {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

const NameLogo = styled.div`
  display: inline-block;
  font-family: "nunito", serif;
  font-size: 20px;
  font-weight: 700px;
  margin: 5% 0 0 5%;
  float: left;
`;

const MenuButton = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  margin: 6% 5% 0 0;
  float: right;
`;

function NavBar(props) {
  const { foreground, background } = useContext(ColoursContext);

  function handleMenuClick() {
    props.setMobileMenu(props.mobileMenu ? false : true);
  }

  return (
    <Navbar backgroundColour={background}>
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
        <NavItem style={{ display: "none" }}>
          <Switch setColours={props.setColours} />
        </NavItem>
      </NavList>

      <NavListMobile>
        <NameLogo>josh codd</NameLogo>

        <MenuButton onClick={handleMenuClick}>
          <FontAwesomeIcon icon={faBars} size="xs" />
        </MenuButton>
      </NavListMobile>
    </Navbar>
  );
}

export default NavBar;
