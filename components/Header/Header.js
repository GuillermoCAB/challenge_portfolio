import { useState } from "react";

// CONSTANTS
import navLinks from "../../constants/NavLinks";

import QuickStart from "../QuickStart";
import { HideMobile, Show, ShowMobile } from "../../styles/main";
import {
  HeaderWrapper,
  HeaderContainer,
  NavBar,
  NavLink,
  NavButton,
  NavContainer,
} from "./styles";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const makeScroll = (target) => {};

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NavBar isOpen={isMenuOpen}>
          <ShowMobile>
            <NavButton onClick={() => setIsMenuOpen((s) => !s)}>
              <Show show={!isMenuOpen}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1H20" stroke="white" />
                  <path d="M0 10H20" stroke="white" />
                  <path d="M0 19H20" stroke="white" />
                </svg>
              </Show>

              <Show show={isMenuOpen}>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.92896 16.0713L17.0711 1.92915" stroke="white" />
                  <path d="M2.92896 1.92871L17.0711 16.0708" stroke="white" />
                  <path d="M10 9H9" stroke="white" />
                </svg>
              </Show>
            </NavButton>
          </ShowMobile>

          <NavContainer isOpen={isMenuOpen}>
            <ul>
              {navLinks.map((menu) => {
                return (
                  <li key={menu.name}>
                    <NavLink
                      onClick={() => setIsMenuOpen(false)}
                      href={menu.link}
                    >
                      {menu.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <ShowMobile customStylesMobile={"width: 100%;margin: auto 0 32px;"}>
              <QuickStart />
            </ShowMobile>
          </NavContainer>
        </NavBar>

        <HideMobile>
          <QuickStart />
        </HideMobile>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
