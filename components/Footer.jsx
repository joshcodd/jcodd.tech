import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  height: 200px;
  width: 100%;
  background-color: #efefef;
  display: inline-block;

  font-family: "Nunito", sans-serif;
  font-size: 13px;
  font-weight: 100;
`;

function Footer() {
  return <FooterStyle></FooterStyle>;
}

export default Footer;
