import styled from "styled-components";

export const HideMobile = styled.div`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ShowMobile = styled.div`
  display: none;

  @media only screen and (max-width: 1024px) {
    display: ${(p) => p.display || "block"};
  }
`;
