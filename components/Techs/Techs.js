import React from "react";
import CTABar from "../CTABar";

import {
  SkillFrame,
  SkillImage,
  SkillRow,
  TechBox,
  TechContainer,
} from "./styles";

function Techs({ techs }) {
  return (
    <TechContainer id="techs">
      <TechBox>
        <h1>Techs I use</h1>

        <SkillRow>
          {techs.map((tech) => {
            return (
              <SkillFrame key={tech._id}>
                <SkillImage>
                  <img src="/CTABar/SkillBG.png" alt="Finb Logo" />
                </SkillImage>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33 6H15C14.2046 6.00079 13.442 6.31712 12.8796 6.87956C12.3171 7.44199 12.0008 8.20459 12 9V42C12.0008 42.7954 12.3171 43.558 12.8796 44.1204C13.442 44.6829 14.2046 44.9992 15 45H33C33.7953 44.9988 34.5577 44.6824 35.12 44.12C35.6824 43.5577 35.9988 42.7953 36 42V9C35.9992 8.20459 35.6829 7.44199 35.1204 6.87956C34.558 6.31712 33.7954 6.00079 33 6ZM33 9V12H15V9H33ZM15 42V15H33V42H15Z"
                    fill="white"
                  />
                </svg>
                <h6>{tech.name}</h6>
                <p>{tech.text}</p>
              </SkillFrame>
            );
          })}
        </SkillRow>

        <CTABar
          hideMobile
          title="Did not find what you were looking for?"
          description="Don't worry, call me so we can create a custom solution."
          openTalkToMe={() => {}}
        />
      </TechBox>
    </TechContainer>
  );
}

export default Techs;
