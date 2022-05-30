import styled from "styled-components";
import { black, blue, white, yellow } from "../../styles/colors";

export const Container = styled.div`
  width: 28%;
  height: ${(p) => (p.isOpen ? "100vh" : "119px")};

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

  transition: all ease 0.3s;

  z-index: 2;

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
    width: ${(p) => (p.isOpen && p.step < 3 ? "100%" : "0")};
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
      width: ${(p) => (p.step < 3 ? "100%" : "0")};
    }
  }

  @media only screen and (max-width: 1023px) {
    width: 100%;
    height: 76px;

    position: unset;

    align-items: center;

    section {
      width: 100%;
      height: ${(p) => (p.isOpen ? "100vh" : "0")};

      position: absolute;
      top: -119px;
    }

    p {
      font-size: 13px;
      line-height: 22px;

      color: ${black};
    }

    span {
      font-size: 13px;
      line-height: 22px;

      color: ${black};
    }

    svg {
      transform: scale(0.8);
    }

    &:hover {
      section {
        width: 100%;
      }
      p {
        display: block;
      }

      span {
        display: none;
      }
    }
  }
`;

export const FormWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  z-index: 1;

  @media only screen and (max-width: 1023px) {
    padding: 0 24px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: ${(p) => (p.isOpen ? "absolute" : "unset")};
    top: -119px;

    justify-content: center;
  }
`;

export const Row = styled.div`
  width: 100%;
  min-height: 119px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 1023px) {
    min-height: 76px;
    justify-content: center;
  }
`;

export const ExitBtn = styled.button`
  display: ${(p) => (p.isOpen ? "block" : "none")};

  margin: 0 0 0 auto;

  background-color: transparent;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1023px) {
    svg {
      transform: scale(0.8);

      margin: 3px 0 0;
    }
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

  background-color: ${(p) => (p.isFilled ? black : "rgba(0, 0, 0, 0.13)")}; ;
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

  color: ${black};

  @media only screen and (max-width: 1300px) {
    font-size: 26px;
    line-height: 34px;
  }
`;

export const Helper = styled.h4`
  display: ${(p) => (p.isOpen ? "block" : "none")};
  z-index: 1;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${white};
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
  font-size: 28px;
  line-height: 60px;

  color: ${black};
  outline: none;
`;

export const Button = styled.button`
  z-index: 1;

  margin: ${(p) => (p.step < 3 ? "0 0 20px" : "auto 0 20px")};

  width: 100%;
  height: 72px;

  display: ${(p) => (p.isOpen ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${black};
  opacity: ${(p) => (p.isDisabled ? "0.5" : "1")};

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18.3556px;
  line-height: 28px;
  color: ${white};
`;
