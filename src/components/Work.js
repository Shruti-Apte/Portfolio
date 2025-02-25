// MyWork.js

import React, { useEffect } from "react";
import styled from "styled-components";
import { work } from "../Data/Work";
import { sr } from "./ScrollRevel";
import { motion } from "motion/react";

const Section = styled.section`
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 5vw;
  padding-bottom: 5vw;
  background-color: transparent;
  overflow-x: hidden;

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

const MyWorkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 10%;
  }
`;

const WorkBlock = styled(motion.a)`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 45%;
  cursor: pointer;
  overflow: hidden;
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5%;

  @media (max-width: 1024px) {
    width: 100%;
    height: 27vh;
  }
`;

const WorkImageContainer = styled.div`
  width: 100%;
  height: 75%;
  cursor: pointer;

  @media (max-width: 1024px) {
    height: 80%;
  }
`;

const WorkImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  @media (max-width: 1024px) {
    height: 100%;
  }
`;

const WorkDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25%;
  text-align: center;
  background-color: #7354e8;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

const WorkIntro = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  margin: 1%;
`;

const WorkName = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: underline;
  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1280px) {
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

const MyWork = ({ setActiveTab }) => {
  useEffect(() => {
    sr.reveal("#workImageLeft", {
      origin: "left",
      distance: "100%",
      duration: 2000,
      easing: "ease-in-out",
      reset: false,
    });
    sr.reveal("#workImageRight", {
      origin: "right",
      distance: "100%",
      duration: 2000,
      easing: "ease-in-out",
      reset: false,
    });
    sr.reveal("#workDesc", { interval: 100 });
  }, []);

  return (
    <Section id="work">
      <SectionTitle>Work</SectionTitle>
      <MyWorkContainer>
        {work.map((workItem, index) => {
          return (
            <WorkBlock
              key={index}
              index={index}
              id={index % 2 === 0 ? "workImageLeft" : "workImageRight"}
              className="workImage"
              href={workItem.link}
            >
              <WorkImageContainer>
                <WorkImage
                  src={workItem.img}
                  alt="workImg"
                  loading="lazy"
                  decoding="async"
                />
              </WorkImageContainer>
              <WorkDesc index={index}>
                <WorkName id="workDesc">{workItem.name}</WorkName>
                <WorkIntro>{workItem.description}</WorkIntro>
              </WorkDesc>
            </WorkBlock>
          );
        })}
      </MyWorkContainer>
    </Section>
  );
};

export default MyWork;
