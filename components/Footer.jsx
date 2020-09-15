import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  height: 100px;
  width: 100%;

  display: inline-block;

  font-family: "Nunito", sans-serif;
  font-size: 13px;
  font-weight: 100;
`;

const Name = styled.div`
  display: block;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 13px;
  font-weight: 100;
  margin-top: 40px;
`;

function Footer() {
  const year = new Date();
  return (
    <FooterStyle>
      <Name>Created by Josh Codd | {year.getFullYear()}</Name>
    </FooterStyle>
  );
}

export default Footer;
