import React, { useEffect } from "react";
import styled from "styled-components";
import { skills } from "../Data/Skills";
import { sr } from "./ScrollRevel";

const Section = styled.section`
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 5vw;
  padding-bottom: 5vw;

   @media (max-width: 1024px) {
  padding-left: 7vw;
  padding-right: 7vw;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #5b34ea;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 2rem;
  grid-column-gap: 10%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid #5b34ea;
  padding-bottom: 12px;
  cursor: default;
`;

const SkillName = styled.h4`
  font-size: 24px;
  margin: 0px;
  margin-left: 10px;
`;

function Skills({ setActiveTab }) {
  useEffect(() => {
    sr.reveal(".skills_text", { interval: 50 });
    sr.reveal(".skills_data", {});
    sr.reveal(".skills_img", { delay: 200 });
  }, []);

  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SkillsContainer>
        {skills.map((skill, index) => {
          return skill.boxIcon ? (
            <SkillItem id={index} className="skills_data">
              <box-icon
                name={skill.icon}
                type="logo"
                color="#ffffff"
                animate="fade-up"
                size="40px"
                className="skills_img"
              ></box-icon>
              <SkillName className="skills_text">{skill.title}</SkillName>
            </SkillItem>
          ) : (
            <SkillItem id={index} className="skills_data">
              <img width="40" height="40" src={skill.icon} alt="icon"/>
              <SkillName className="skills_text">{skill.title}</SkillName>
            </SkillItem>
          );
        })}
      </SkillsContainer>
    </Section>
  );
}

export default Skills;
