import styled from "styled-components";
import { white } from "../../styles/colors";

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100vh;

  margin: 0 auto;

  padding: 0 10%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  z-index: 2;

  @media only screen and (max-width: 1023px) {
    padding: 0 5%;
    justify-content: center;
    align-items: center;
  }
`;

export const ScrollColumn = styled.a`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  p {
    margin-bottom: 16px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    color: ${white};

    transform: rotate(-90deg);
  }
`;

export const TextColumn = styled.div`
  margin: 0 0 0 103px;
  height: 100%;
  max-width: 487px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  z-index: 2;

  h5 {
    margin: 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    color: ${white};
  }

  h2 {
    margin: 11px 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 53.1273px;
    line-height: 80px;

    color: ${white};

    span {
      font-family: "Cookie";
      font-size: 76.3px;
    }
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
    margin: 0;
    justify-content: center;
    align-items: center;

    h5 {
      margin: 0;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
      /* identical to box height */

      color: ${white};
    }

    h2 {
      margin: 7px 0 17px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 27.3495px;
      line-height: 32px;

      color: ${white};

      span {
        font-family: "Cookie";
        font-size: 39.3px;
      }
    }

    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;

      color: ${white};
    }
  }
`;
