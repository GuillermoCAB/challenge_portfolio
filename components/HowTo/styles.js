import styled from "styled-components";
import { black, blue, white, yellow } from "../../styles/colors";

export const HowContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  height: auto;

  margin: 140px auto 0;

  padding: 180px 10%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  z-index: 2;

  @media only screen and (max-width: 1023px) {
    padding: 130px 5%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HowTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h5 {
    margin: 0 0 4px;
    width: 380px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;

    color: ${white};

    span {
      color: ${yellow};
    }
  }

  p {
    margin: 0;
    width: 353px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    color: ${white};
  }

  @media only screen and (max-width: 1023px) {
    width: 100%;

    h5 {
      margin: 0;

      width: 100%;
    }

    p {
      width: 100%;
    }
  }
`;

export const HowTopic = styled.div`
  margin: 15px 0 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 90px;

    color: ${yellow};
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    color: ${white};
  }

  @media only screen and (max-width: 1023px) {
    margin: 20px 0 0;
  }
`;

export const HowFAQColumn = styled.div`
  max-width: 761px;
  width: 761px;

  margin: 0 0 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media only screen and (max-width: 1023px) {
    margin: 70px 0 0;

    width: 100%;
    max-width: 100%;
  }
`;
