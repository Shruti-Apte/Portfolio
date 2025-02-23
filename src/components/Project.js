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
  padding-left: 2%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 5%;
  align-items: center;
  justify-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 10%;
  }
`;

const ProjectBlock = styled.a`
  width: 45%;
  height: 400px;
  border-radius: 5%;
  cursor: pointer;
  overflow: hidden;
  color: #fff;
  font-size: 1rem;
 text-decoration: none;

  @media (max-width: 1024px) {
    width: 100%;
    height: 200px;
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 80%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    height: auto;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  @media (max-width: 1024px) {
    height: auto;
  }
`;

const ProjectDesc = styled.div`
display: flex;
flex-direction: column;
align-items: center; 
justify-content:center; 
width: 100%;
  height: 15%;
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: center;
  background-color: #7354e8;
  cursor: pointer;
`;

const ProjectName = styled.span`
 font-size: 1.25rem;
 font-weight: bold;
 text-decoration: underline;
`;

const Project = () => {

useEffect(() => {
  sr.reveal(".workItem", { interval: 50 });
  sr.reveal(".workImage", { interval: 50 });
}, []);

  return (
    <Section id="project">
      <SectionTitle>Project</SectionTitle>
      {
        <MyProjectContainer>
        {projects.map((project) => (
          <ProjectBlock className="projectImg" href={project.link}>
            <ProjectImageContainer>
              <ProjectImage
                src={project.img}
                alt="ProjectImg"
                loading="lazy"
                decoding="async"
              />
            </ProjectImageContainer>
            <ProjectDesc>
              <ProjectName>{project.name}</ProjectName>
              {project.description}
            </ProjectDesc>
          </ProjectBlock>
        ))}
      </MyProjectContainer>
      }
    </Section>
  );
};

export default Project;
