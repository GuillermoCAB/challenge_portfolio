import styled from "styled-components";
import { white, blue, black } from "../../styles/colors";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 119px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  background-color: ${black}80;

  z-index: 5;

  @media only screen and (max-width: 1023px) {
    background-color: ${black};
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1980px;
  height: 119px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5%;

  background-color: transparent;

  z-index: 3;

  @media only screen and (max-width: 1023px) {
    position: fixed;
    top: 0;
    background-color: ${black};
  }
`;

export const NavBar = styled.nav`
  width: auto;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow-x: hidden;

  @media only screen and (max-width: 1023px) {
    margin: 0 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: ${black};
  }
`;

export const NavContainer = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;

    margin: 0;
  }

  @media only screen and (max-width: 1023px) {
    min-width: 100%;
    min-height: calc(100vh - 119px);

    padding: 0 5%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    position: fixed;
    left: ${(p) => (p.isOpen ? "0" : "100vw")};
    top: 119px;

    transition: all ease 0.3s;
    background-color: ${black};

    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      padding: 0;

      li {
        margin: 0 0 39px;

        a {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 26.7436px;
          line-height: 40px;

          color: #ffffff;
        }
      }
    }
  }
`;

export const NavButton = styled.button`
  background-color: transparent;
`;

export const NavLink = styled.a`
  margin-right: 27px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: ${white};

  transition: all ease 0.3s;
`;
