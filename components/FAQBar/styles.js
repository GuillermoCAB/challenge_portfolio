import styled from "styled-components";
import { white, yellow } from "../../styles/colors";

export const Container = styled.div`
  margin: 0 0 62px;

  width: 100%;
  height: ${(p) => (p.isOpen ? "254px" : "72px")};
  max-height: ${(p) => (p.isOpen ? "254px" : "72px")};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  overflow: hidden;

  z-index: 1;

  transition: all ease 0.3s;
`;

export const Title = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0 auto 0 0;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 72px;

    color: ${(p) => (p.isOpen ? yellow : white)};
    opacity: ${(p) => (p.isOpen ? "1" : "0.7")};

    transition: all ease 0.3s;
  }

  svg {
    margin: ${(p) => (p.isOpen ? "0" : "0 12px 0 0")};

    color: ${(p) => (p.isOpen ? yellow : white)};
    transition: all ease 0.3s;
    opacity: ${(p) => (p.isOpen ? "1" : "0.7")};

    transform: ${(p) => (p.isOpen ? "rotate(180deg)" : "0")};
  }

  &:hover {
    cursor: pointer;
    p {
      opacity: 1;
    }

    svg {
      opacity: 1;
      margin: 0;
    }
  }

  @media only screen and (max-width: 700px) {
    p {
      font-size: 34.1299px;
      line-height: 51px;
    }
  }
`;

export const Text = styled.div`
  margin: 20px 0 0;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 159.5%;

  color: ${white};
`;
