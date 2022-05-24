import styled from "styled-components";
import { white, blue } from "../../styles/colors";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 119px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1980px;
  height: 119px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5%;
`;

export const Padder = styled.div`
  width: 200px;
  height: 36px;
`;

export const NavBar = styled.nav`
  width: auto;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavLink = styled.a`
  margin-right: 27px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: ${white};

  border-bottom: ${(p) => (p.isActive ? blue : "transparent")} 1px solid;
  transition: all ease 0.3s;
`;
