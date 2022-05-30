import { Container, Title, Text } from "./styles";
import { useState, useEffect } from "react";

export default function FAQBar({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container isOpen={isOpen} onClick={() => setIsOpen((s) => !s)}>
      <Title isOpen={isOpen}>
        <p>{faq.title}</p>
        <svg
          width="47"
          height="25"
          viewBox="0 0 47 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 1.25L23.5 22.75L45 1.25"
            stroke={isOpen ? "yellow" : "white"}
            stroke-width="3"
          />
        </svg>
      </Title>
      <Text>{faq.text}</Text>
    </Container>
  );
}
