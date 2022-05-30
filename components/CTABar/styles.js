import styled from "styled-components";
import { white } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 195px;
  min-height: 195px;

  display: ${(p) => (p.hide ? "none" : "flex")};
  justify-content: flex-start;
  align-items: center;

  position: relative;

  padding: 4% 5%;

  h6 {
    max-width: 215px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    color: ${white};

    z-index: 1;
  }

  p {
    max-width: 387px;
    margin: 0 auto 0 3.5%;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: ${white};
    z-index: 1;
  }

  button {
    margin: 0 0 0 10px;
    min-width: 360px;

    padding: 22px 48px;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: 2px solid ${white};
    filter: drop-shadow(0px 0px 18px rgba(0, 0, 0, 0.11));

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: ${white};

    &:hover {
      svg {
        margin: 0 0 0 16px;
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 1320px) {
    h6 {
      width: 500px;

      font-size: 18px;
      line-height: 26px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }

    button {
      padding: 22px 30px;
      font-size: 16px;
      line-height: 25px;
      min-width: 300px;
    }

    &:hover {
      svg {
        width: 45px;
        margin: 0 0 0 8px;
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 1023px) {
    display: ${(p) => (p.hideMobile ? "none" : "flex")};
  }

  @media only screen and (max-width: 700px) {
    height: auto;
    min-height: 195px;
    padding: 10% 15%;

    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h6 {
      margin: 0;

      font-size: 24px;
      line-height: 36px;
    }

    p {
      margin: 22px 0;
      font-size: 16px;
      line-height: 24px;
    }

    button {
      margin: 0;
      padding: 22px 24px;
      font-size: 18px;
      line-height: 27px;

      min-width: 100%;
      max-width: 100%;
    }
  }
`;

export const BigArrow = styled.svg`
  margin: 0 0 0 -75px;

  opacity: 0;

  transition: all ease 0.3s;

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

export const SmallArrow = styled.svg`
  display: none;

  @media only screen and (max-width: 1023px) {
    display: unset;
    margin: 0 0 0 8px;
  }
`;

export const ImageHolder = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  margin: 0 0 0 -5%;

  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 700px) {
    margin: -10% 0 0 -15%;
  }
`;
