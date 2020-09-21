import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SideBarMenuStyle = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: inline-block;
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
  margin: 12px 20px;
`;

const AStyled = styled.a`
  font-size: 25px;
  font-family: "Nunito", sans-serif;
  font-weight: 100;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
`;

function SideBarMenu(props) {
  const isVisible = props.visible;

  function handleClick(value) {
    if (value.length > 0) {
      window.open(value);
    }

    props.setMobileMenu(false);
  }

  return (
    <SideBarMenuStyle isVisible={isVisible}>
      <NavList>
        <NavItem onClick={handleClick}>
          <Link href="/#">
            <AStyled>HOME</AStyled>
          </Link>
        </NavItem>

        <NavItem onClick={handleClick}>
          <Link href="/#about">
            <AStyled>ABOUT</AStyled>
          </Link>
        </NavItem>

        <NavItem onClick={handleClick}>
          <Link href="/#projects">
            <AStyled>PROJECTS</AStyled>
          </Link>
        </NavItem>

        <NavItem onClick={handleClick}>
          <Link href="/#">
            <AStyled>CONTACT</AStyled>
          </Link>
        </NavItem>

        <NavItem onClick={handleClick}>
          <Link href="/#">
            <AStyled>CV</AStyled>
          </Link>
        </NavItem>

        <NavItem onClick={() => handleClick("https://github.com/joshcodd")}>
          <Icon icon={faGithub} />
        </NavItem>

        <NavItem
          onClick={() => handleClick("https://www.linkedin.com/in/joshcodd/")}
        >
          <Icon icon={faLinkedin} />
        </NavItem>
      </NavList>
    </SideBarMenuStyle>
  );
}

export default SideBarMenu;
