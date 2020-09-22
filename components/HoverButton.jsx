import React from "react";
import styled from "styled-components";

const ButtonHov = styled.div`
  z-index: 1;
  display: inline-block;
  position: relative;
  ::after {
    position: absolute;
    content: "";
    background: #242424;
    z-index: -1;
    height: 0;
    left: 0;
    bottom: 0;
    width: 100%;

    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  :hover {
    color: white;
    cursor: pointer;
  }

  :hover:after {
    height: 100%;
  }
`;

function HoverButton(props) {
  const href = props.href || "";
  function handleClick() {
    if (href.charAt(0) === "#") {
      window.location.href = href;
    } else {
      window.open(href);
    }
  }

  return (
    <ButtonHov className={props.className} onClick={handleClick}>
      {props.children}
    </ButtonHov>
  );
}

export default HoverButton;
