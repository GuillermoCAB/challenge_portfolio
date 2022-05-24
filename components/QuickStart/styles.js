import styled from "styled-components";
import { black, blue, yellow } from "../../styles/colors";

export const Container = styled.div`
  width: 28%;
  height: ${(p) => (p.isOpen ? "100%" : "119px")};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 2.5%;

  position: absolute;
  right: 0;
  top: 0;

  background-color: ${blue};

  color: ${black};

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

  &:hover {
    cursor: ${(p) => (p.isOpen ? "default" : "pointer")};
  }

  svg {
    z-index: 1;
    margin: 0 8px 0 0;
  }

  p {
    display: ${(p) => (p.isOpen ? "none" : "block")};
  }

  span {
    display: ${(p) => (p.isOpen ? "block" : "none")};
    z-index: 1;
  }

  section {
    width: ${(p) => (p.isOpen && p.step < 5 ? "100%" : "0")};
    height: 100%;

    background-color: ${yellow};

    transition: all ease 0.3s;

    position: absolute;
    left: 0;
    z-index: 0;
  }

  &:hover {
    p {
      display: none;
    }

    span {
      display: block;
    }

    section {
      width: ${(p) => (p.step < 5 ? "100%" : "0")};
    }
  }
`;

export const Row = styled.div`
  width: 100%;
  min-height: 119px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ExitBtn = styled.button`
  display: ${(p) => (p.isOpen ? "block" : "none")};

  margin: 0 0 0 auto;

  background-color: transparent;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

export const Stepper = styled.div`
  display: ${(p) => (p.isOpen ? "block" : "none")};
  z-index: 1;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Step = styled.div`
  display: ${(p) => (p.isOpen ? "block" : "none")};
  z-index: 1;

  width: calc(100% / 5 - 12px);
  height: 5px;

  background-color: ${(p) =>
    p.isFilled ? "#000000" : "rgba(0, 0, 0, 0.13)"}; ;
`;

export const Question = styled.h3`
  display: ${(p) => (p.isOpen ? "block" : "none")};
  z-index: 1;

  margin-bottom: 0;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  color: #000000;
`;

export const Helper = styled.h4`
  display: ${(p) => (p.isOpen ? "block" : "none")};
  z-index: 1;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
`;

export const Input = styled.input`
  display: ${(p) => (p.isOpen ? "block" : "none")};
  z-index: 1;

  margin: auto 0;

  width: 100%;

  background-color: transparent;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 60px;

  color: #000000;
  outline: none;
`;

export const Button = styled.button`
  z-index: 1;

  margin: ${(p) => (p.step < 5 ? "0 0 20px" : "auto 0 20px")};

  width: 100%;
  height: 72px;

  display: ${(p) => (p.isOpen ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #000000;
  opacity: ${(p) => (p.isDisabled ? "0.5" : "1")};

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18.3556px;
  line-height: 28px;
  color: #ffffff;
`;
