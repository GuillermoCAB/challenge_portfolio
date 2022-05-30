import React from "react";

import { BigArrow, Container, ImageHolder, SmallArrow } from "./styles";

function CTABar({ title, description, hideMobile, hide, openTalkToMe }) {
  return (
    <Container hideMobile={hideMobile} hide={hide}>
      <h6>{title}</h6>

      <p>{description}</p>

      <button onClick={openTalkToMe}>
        Let's talk
        <BigArrow
          width="75"
          height="20"
          viewBox="0 0 75 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M64.5 1L73.5 10L64.5 19" stroke="white" stroke-width="2" />
          <path d="M0 10H73" stroke="white" stroke-width="2" />
        </BigArrow>
        <SmallArrow
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 10H21" stroke="white" stroke-width="2" />
          <path d="M12 1L21 10L12 19" stroke="white" stroke-width="2" />
        </SmallArrow>
      </button>

      <ImageHolder>
        <img src="/CTABar/CTABG.png" alt="Finb Logo" />
      </ImageHolder>
    </Container>
  );
}

export default CTABar;
