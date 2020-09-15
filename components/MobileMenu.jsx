import React from "react";
import styled from "styled-components";

const SideBarMenuStyle = styled.div`
  @media (max-width: 450px) {
    left: ${(props) => (props.isVisible ? "0vw" : "60vw")};
    position: fixed;
    background-color: #efefef;
    height: 100vh;
    width: 60vw;
    z-index: 100;
    margin-left: 40vw;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  text-align: right;
  margin-top: 200px;
  padding: 0;
`;

const NavItem = styled.li`
  font-size: 25px;
  font-family: "Nunito", sans-serif;
  font-weight: 100;
  margin: 12px 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

function SideBarMenu(props) {
  const isVisible = props.visible;
  return (
    <SideBarMenuStyle isVisible={isVisible}>
      <NavList>
        <NavItem>
          <Link href="#">HOME</Link>
        </NavItem>
        <NavItem>
          <Link href="#about">ABOUT</Link>
        </NavItem>
        <NavItem>
          <Link href="#projects">PROJECTS</Link>
        </NavItem>
        <NavItem>
          <Link href="#">CONTACT</Link>
        </NavItem>
      </NavList>
    </SideBarMenuStyle>
  );
}

export default SideBarMenu;
