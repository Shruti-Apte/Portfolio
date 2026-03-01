import React, { useEffect } from "react";
import styled from "styled-components";
import { projects } from "../Data/Project";
import { sr } from "./ScrollRevel";

  const Section = styled.section`
   padding-left: 15vw;
    padding-right: 15vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    min-height: 100vh;
    background-color: #000;
    color: #fff;
  `;

  const SectionTitle = styled.h2`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #5b34ea;
  `;

  const MyProjectContainer = styled.div`
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

const ProjectBlock = styled.a`
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

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 75%;
  cursor: pointer;
  transition: height 0.4s ease-in-out;

  ${ProjectBlock}:hover & {
    height: 60%;
  }

  @media (max-width: 1024px) {
    height: 80%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  @media (max-width: 1024px) {
    height: 100%;
  }
`;

const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25%;
  text-align: center;
  background-color: #7354e8;
  transition: height 0.4s ease-in-out;
  padding: 10px;
  box-sizing: border-box;

  ${ProjectBlock}:hover & {
    height: 40%;
  }
`;

const ProjectName = styled.span`
 font-size: 1.25rem;
 font-weight: bold;
 text-decoration: underline;
`;

const ProjectIntro = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  margin: 1%;

  ${ProjectBlock}:hover & {
    overflow: visible;
    white-space: normal;
    text-overflow: normal;
  }
  `;

const Project = () => {

useEffect(() => {
    sr.reveal("#projectImageLeft", {
      origin: "left",
      distance: "100%",
      duration: 2000,
      easing: "ease-in-out",
      reset: false,
    });
    sr.reveal("#projectImageRight", {
      origin: "right",
      distance: "100%",
      duration: 2000,
      easing: "ease-in-out",
      reset: false,
    });
    sr.reveal("#projectDesc", { interval: 100 });
  }, []);

  return (
    <Section id="project">
      <SectionTitle>Projects</SectionTitle>
        <MyProjectContainer>
        {projects.map((project, index) => (
          <ProjectBlock
            key={index}
            id={index % 2 === 0 ? "projectImageLeft" : "projectImageRight"}
            className="projectImg"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectImageContainer>
              <ProjectImage
                src={project.img}
                alt="ProjectImg"
                loading="lazy"
                decoding="async"
              />
            </ProjectImageContainer>
            <ProjectDesc>
              <ProjectName id="projectDesc">{project.name}</ProjectName>
              <ProjectIntro>{project.description}</ProjectIntro>
            </ProjectDesc>
          </ProjectBlock>
        ))}
      </MyProjectContainer>
    </Section>
  );
};

export default Project;
