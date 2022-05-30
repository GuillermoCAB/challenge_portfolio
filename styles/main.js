import styled from "styled-components";
import { black } from "./colors";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;

  max-width: 100vw;

  background-color: ${black};

  overflow-x: hidden;
  position: relative;
`;

export const HideMobile = styled.div`
  ${(p) => p.customStyles}

  @media only screen and (max-width: 1023px) {
    display: none;
    ${(p) => p.customStylesMobile}
  }
`;

export const ShowMobile = styled.div`
  display: none;
  ${(p) => p.customStyles}

  @media only screen and (max-width: 1023px) {
    display: ${(p) => p.display || "block"};
    ${(p) => p.customStylesMobile}
  }
`;

export const Show = styled.div`
  display: ${(p) => (p.show ? p.displayType || "block" : "none")};
`;
