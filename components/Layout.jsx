import React, { useContext, useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import { Colours, ColoursContext } from "../components/ColoursContext";

const LayoutStyle = styled.div`
  -webkit-transition: color 1s;
  -moz-transition: color 1s;
  -o-transition: color 1s;
  transition: color 1s;
`;

function Layout(props) {
  const [colours, setColours] = useState(Colours.light);

  const documentStyle = {
    backgroundColor: colours.background,
    color: colours.foreground,
  };

  return (
    <ColoursContext.Provider value={colours}>
      <LayoutStyle style={documentStyle}>
        <NavBar setColours={setColours} />
        <Sidebar />
        {props.children}
      </LayoutStyle>
    </ColoursContext.Provider>
  );
}

export default Layout;
