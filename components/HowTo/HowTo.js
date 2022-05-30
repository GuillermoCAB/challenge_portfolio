import React from "react";
import FAQBar from "../FAQBar";

import { HowContainer, HowTextColumn, HowTopic, HowFAQColumn } from "./styles";

function HowTo({ faqItems }) {
  return (
    <HowContainer id="howTo">
      <HowTextColumn>
        <h5>
          How I make it <span>happen</span>
        </h5>

        <p>
          I always seek to work raising the level of satisfaction and bringing
          the customer an amazing result, keeping the deadline and aiming for
          absolute quality.
        </p>

        <HowTopic>
          <h5>6 years</h5>
          <p>Developer experience</p>
        </HowTopic>

        <HowTopic>
          <h5>99+</h5>
          <p>Happy clients</p>
        </HowTopic>
      </HowTextColumn>

      <HowFAQColumn>
        {faqItems.map((faq) => {
          return <FAQBar faq={faq} />;
        })}
      </HowFAQColumn>
    </HowContainer>
  );
}

export default HowTo;
