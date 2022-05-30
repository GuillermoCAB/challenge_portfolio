import React from "react";
import { useState } from "react";

import {
  Container,
  ExitBtn,
  Stepper,
  Step,
  Row,
  Question,
  Input,
  Button,
  Helper,
  FormWrapper,
} from "./styles";

const steps = [
  {
    id: 0,
    questionPrefix: "To start what's ",
    questionBold: "your name",
    questionSufix: "?",
    required: true,
    label: "Name",
    verification: (value) => (value.length > 5 ? true : false),
  },
  {
    id: 1,
    questionPrefix: "Now I need ",
    questionBold: "your email",
    required: true,
    label: "your@email.com",
    verification: (value) =>
      value.length > 5 && value.includes("@") && value.includes(".com")
        ? true
        : false,
  },
  {
    id: 2,
    questionPrefix: "To finish tell me a little about ",
    questionBold: "what you need?",
    required: true,
    helper:
      "Ex. I would like to create an e-commerce for my sporting goods store.",
    label: "Describe...",
    verification: (value) => (value.length > 10 ? true : false),
  },
  {
    id: 3,
    extra: ":)",
    questionBold: `All right! `,
    questionSufix:
      "I received your data and I will be in touch shortly. Thank you so much!",
    required: false,
  },
];

function QuickStart() {
  const [isOpen, setIsOpen] = useState(false);
  const [actualStep, setActualStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");

  const nextStep = () => {
    if (actualStep > 2) {
      return setIsOpen(false);
    }

    setActualStep((s) => ++s);
  };

  const getInputValue = () => {
    switch (actualStep) {
      case 0:
        return name;

      case 1:
        return email;

      case 2:
        return phone;

      case 3:
        return description;

      case 4:
        return budget;

      default:
        return name;
    }
  };

  const getInputValueSetter = (value) => {
    switch (actualStep) {
      case 0:
        return setName(value);

      case 1:
        return setEmail(value);

      case 2:
        return setPhone(value);

      case 3:
        return setDescription(value);

      case 4:
        return setBudget(value);

      default:
        return setName(value);
    }
  };

  return (
    <Container
      step={actualStep}
      isOpen={isOpen}
      onClick={() => (isOpen ? null : setIsOpen(true))}
    >
      <section />
      <FormWrapper isOpen={isOpen}>
        <Row isOpen={isOpen}>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.888 2.496L18.288 6.816L12.048 9.072L18.288 11.328L15.792 15.792L10.608 11.52L11.712 18.144H6.72L7.776 11.52L2.64 15.888L0 11.28L6.24 9.024L0.0480001 6.864L2.496 2.448L7.824 6.672L6.72 0H11.76L10.608 6.672L15.888 2.496Z"
              fill="#030303"
            />
          </svg>
          <p>Talk to me</p>
          <span>Talk to me, let's go?</span>

          <ExitBtn onClick={() => setIsOpen(false)} isOpen={isOpen}>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.92896 16.071L17.0711 1.92891" stroke="black" />
              <path d="M2.92896 1.92896L17.0711 16.0711" stroke="black" />
              <path d="M10 9H9" stroke="black" />
            </svg>
          </ExitBtn>
        </Row>

        <Stepper isOpen={isOpen}>
          {steps.map((step) => {
            if (step.id > 2) return;
            return (
              <Step
                key={step.id}
                onClick={() => setActualStep(step.id)}
                isFilled={actualStep >= step.id}
                isOpen={isOpen}
              />
            );
          })}
        </Stepper>

        <Question isOpen={isOpen && steps[actualStep].extra}>
          <b>{steps[actualStep].extra}</b>
        </Question>

        <Question isOpen={isOpen}>
          {steps[actualStep].questionPrefix || ""}

          <b>{steps[actualStep].questionBold}</b>
          {steps[actualStep].questionSufix}
        </Question>

        <Helper isOpen={isOpen}>{steps[actualStep].helper}</Helper>

        <Input
          isOpen={isOpen && actualStep < 3}
          value={getInputValue()}
          placeholder={steps[actualStep].label}
          onChange={(e) => {
            getInputValueSetter(e.target.value);
          }}
        />

        <Button
          step={actualStep}
          onClick={nextStep}
          isOpen={isOpen}
          isDisabled={
            steps[actualStep].required
              ? steps[actualStep].verification(getInputValue())
                ? false
                : true
              : false
          }
        >
          {actualStep > 2 ? "Ok" : "Continue"}
        </Button>
      </FormWrapper>
    </Container>
  );
}

export default QuickStart;
