import React from "react";

import { HideMobile } from "../../styles/main";
import { BannerContainer, ScrollColumn, TextColumn } from "./styles";

function Banner() {
  return (
    <BannerContainer id="aboutMe">
      <HideMobile customStyles="height: 100%;">
        <ScrollColumn href="#techs">
          <p>Scroll</p>
          <svg
            width="7"
            height="45"
            viewBox="0 0 7 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 45L6.38675 40L0.61325 40L3.5 45ZM3 2.18557e-08L3 40.5L4 40.5L4 -2.18557e-08L3 2.18557e-08Z"
              fill="white"
            />
          </svg>
        </ScrollColumn>
      </HideMobile>

      <TextColumn>
        <h5>Gui Benitez</h5>
        <h2>
          Frontend <span>developer</span>
        </h2>
        <p>Know a little bit more about me, the techs I use and my portfolio</p>
      </TextColumn>
    </BannerContainer>
  );
}

export default Banner;
