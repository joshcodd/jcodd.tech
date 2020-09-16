import React, { useContext, useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import MobileMenu from "../components/MobileMenu";
import { Colours, ColoursContext } from "../components/ColoursContext";

const LayoutStyle = styled.div`
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
  const [colours, setColours] = useState(Colours.light);
  const [mobileMenu, setMobileMenu] = useState(false);

  const documentStyle = {
    backgroundColor: colours.background,
    color: colours.foreground,
  };

  return (
    <ColoursContext.Provider value={colours}>
      <LayoutStyle style={documentStyle} mobileMenu={mobileMenu}>
        <NavBar
          setColours={setColours}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
        <Sidebar />
        <MobileMenu visible={mobileMenu} setMobileMenu={setMobileMenu} />
        {props.children}
      </LayoutStyle>
    </ColoursContext.Provider>
  );
}

export default Layout;
