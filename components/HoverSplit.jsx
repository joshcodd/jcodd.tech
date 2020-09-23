import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HoverSplitContainer = styled.div`
  cursor: pointer;
`;

const TopHalf = styled.div`
  position: absolute;
  clip-path: inset(0% 0% 50% 0px);
  ${HoverSplitContainer}:hover & {
    transform: translate(7px, 0px);
  }
`;

const BottomHalf = styled.div`
  position: relative;
  clip-path: inset(50% 0px 0px 0px);
  ${HoverSplitContainer}:hover & {
    left: -7px;
  }
`;

function HoverSplit(props) {
  return (
    <Link href={props.href}>
      <HoverSplitContainer>
        <TopHalf>{props.children}</TopHalf>
        <BottomHalf>{props.children}</BottomHalf>
      </HoverSplitContainer>
    </Link>
  );
}

export default HoverSplit;
