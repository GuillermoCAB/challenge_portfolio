import styled from "styled-components";
import { ligthBlack, white } from "../../styles/colors";

export const TechContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  height: auto;

  margin: 0 auto;

  padding: 0 5%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  z-index: 2;

  @media only screen and (max-width: 1023px) {
    padding: 0 5%;
  }
`;

export const TechBox = styled.div`
  width: 100%;
  height: auto;

  margin: 100px 0 0;

  padding: 5%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: ${ligthBlack};

  z-index: 2;

  h1 {
    margin: 18px 0 45px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;

    color: ${white};
  }

  @media only screen and (max-width: 1023px) {
    padding: 5%;
  }

  @media only screen and (max-width: 700px) {
    padding: 36px;

    h1 {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;

export const SkillRow = styled.div`
  margin: 0 0 58px;

  display: grid;
  column-gap: 22px;
  row-gap: 17px;

  grid-template-columns: auto auto auto auto;

  @media only screen and (max-width: 1800px) {
    grid-template-columns: auto auto auto;
  }

  @media only screen and (max-width: 1300px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: auto;
  }
`;

export const SkillFrame = styled.div`
  width: 100%;
  height: 262px;

  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  border: 1px solid #262626;

  svg {
    min-width: 48px;
    min-height: 48px;

    z-index: 2;
  }

  h6 {
    margin: 16px 0 13px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    color: ${white};

    z-index: 2;
  }

  p {
    margin: 0;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 159.5%;

    color: ${white};

    z-index: 2;
  }

  &:hover {
    div {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 700px) {
    height: 252px;
    padding: 32px;

    h6 {
      font-size: 16.2461px;
      line-height: 24px;
    }

    p {
      font-size: 12.9969px;
      line-height: 159.5%;
    }
  }
`;

export const SkillImage = styled.div`
  width: 100%;
  height: 100%;

  margin: -40px 0 0 -40px;

  position: absolute;

  opacity: 0;

  transition: all ease 0.3s;

  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 700px) {
    margin: -32px 0 0 -32px;
  }
`;
