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

function NavBar() {
  return (
    <Navbar>
      <NavList>
        <NavItem>
          <a>ABOUT</a>
        </NavItem>
        <NavItem>
          <a>PROJECTS</a>
        </NavItem>
        <NavItem>
          <a>CONTACT</a>
        </NavItem>
        <NavItem>
          <Switch />
        </NavItem>
      </NavList>
    </Navbar>
  );
}

export default NavBar;
