import Image from "next/image";
import { useState } from "react";

// CONSTANTS
import navLinks from "../../constants/NavLinks";

import QuickStart from "../QuickStart";
import { HideMobile, ShowMobile } from "../../styles/main";
import {
  HeaderWrapper,
  HeaderContainer,
  Padder,
  NavBar,
  NavLink,
} from "./styles";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HideMobile>
          <Image
            src="/index/logo.png"
            alt="Finb Logo"
            width={200}
            height={36}
          />
        </HideMobile>
        <ShowMobile>
          <Image
            src="/index/logo-small.png"
            alt="Finb Logo"
            width={79.11}
            height={23}
          />
        </ShowMobile>

        <NavBar>
          <ul>
            {navLinks.map((menu) => {
              return (
                <li>
                  <NavLink
                    onClick={() => setActiveMenu(menu.name)}
                    isActive={menu.name === activeMenu}
                    href={menu.link}
                  >
                    {menu.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </NavBar>

        <Padder />

        <QuickStart />
      </HeaderContainer>
    </HeaderWrapper>
  );
}
