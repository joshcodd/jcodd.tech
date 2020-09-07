import React from "react";
import styled from "styled-components";
import Switch from "./Switch";

const Navbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
`;

const NavList = styled.ul`
  position: relative;
  top: 35px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  float: right;
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
  color: #242424;
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

function NavBar() {
  return (
    <Navbar>
      <NavList>
        <NavItem href="#about">
          <Link href="#about">
            <TopHalf>ABOUT</TopHalf>
            <BottomHalf>ABOUT</BottomHalf>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#projects">
            <TopHalf> PROJECTS</TopHalf>
            <BottomHalf>PROJECTS</BottomHalf>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#">
            <TopHalf>CONTACT</TopHalf>
            <BottomHalf>CONTACT</BottomHalf>
          </Link>
        </NavItem>
        <NavItem>
          <Switch />
        </NavItem>
      </NavList>
    </Navbar>
  );
}

export default NavBar;
