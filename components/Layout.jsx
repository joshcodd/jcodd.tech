import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import MobileMenu from "../components/MobileMenu";

const LayoutContainer = styled.div`
  @media (max-width: 600px) {
    position: relative;
    left: ${(props) => (props.mobileMenu ? "-60vw" : "0")};
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
`;

function Layout(props) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <LayoutContainer mobileMenu={mobileMenu}>
      <NavBar
        animate={props.animate}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <Sidebar animate={props.animate} />
      <MobileMenu visible={mobileMenu} setMobileMenu={setMobileMenu} />
      {props.children}
    </LayoutContainer>
  );
}

export default Layout;
