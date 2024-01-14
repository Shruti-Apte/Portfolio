import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { education, hobbies } from "../Data/About.js";
import { sr } from "./ScrollRevel.js";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 5vw;
  padding-bottom: 5vw;
`;

const AboutTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #5b34ea;
`;

const AboutSubTitle = styled.h2`
  font-weight: bold;
  text-align: left;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }

`;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%
  }
`;

const AboutText = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

const AboutDesc = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: #fff;
`;

const AboutButton = styled.a`
  display: inline-block;
  margin-top: 10%;
  padding: 1rem 2rem;
  background-color: #5b34ea;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-color: #7354e8;
  }
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding-left: 10%;

  @media (max-width: 1024px) {
    width: 100%;
    padding-left: 0%;
    margin-top: 10%;
  }
`;

const AboutMeHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 2%;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`;

const AboutItem = styled.div`
  padding: 0.5rem 1rem;
  color: white;
  display: flex;
  align-items: center;
  font-weight: ${(props) => (props.underline ? "semibold" : "normal")};
  font-size: ${(props) => (props.underline ? "20px" : "18px")};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  text-decoration-color: #5b34ea;
  text-decoration-thickness: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const EducationBlock = styled.div`
  display: flex;
  margin-left: 4%;
  height: 27%;
  width: 100%;
`;
const EducationContent = styled.div`
  margin-left: 5%;
  margin-bottom: 5%;
  width: 100%;
`;
const EducationTime = styled.div`
  font-size: 18px;
  padding-bottom: 10px;
`;

const EducationDegree = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const EducationCollege = styled.div`
  font-size: 18px;
  padding-bottom: 10px;
`;

const EducationDescription = styled.div`
  font-size: 16px;
`;

const EducationTimeLine = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: #5b34ea;
  transform: translate(6px, -7px);
`;

const TimeLineCircle = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: #5b34ea;
  border-radius: 50%;
`;

const Hobbies = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  margin-top: 5%;
  height: 100%;
  width: 100%;
`;
const Hobby = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5%;
`;

const About = ({ setActiveTab }) => {
  const [activeSection, setActiveSection] = useState("Education");

  useEffect(() => {
    sr.reveal(".aboutSubtitle", {});
    sr.reveal(".aboutDesc", {});
    sr.reveal(".aboutButton", {});
    sr.reveal(".educationBlock", {});
    sr.reveal(".hobby", {});
  }, []);

  return (
    <AboutContainer id="about">
      <AboutTitle>About</AboutTitle>
      <AboutWrapper>
        <AboutText>
          <AboutSubTitle className="aboutSubtitle">Hello,</AboutSubTitle>
          <AboutDesc className="aboutDesc">
            I'm a young front-end developer with a knack for creating
            user-friendly websites. I'm also a former camp Instructor and a
            future full stack developer. When I'm not coding,You can find me
            camping in nature or engaging in thrilling adventure activities. I
            love to travel and discover new places, which inspires me to be
            creative. With a focus on continuous learning, I'm excited to
            enhance my skills and contribute to innovative projects. Let's work
            together to create amazing web experiences!
          </AboutDesc>
          <AboutButton
            className="aboutButton"
            href="#contact"
          >
            Contact
          </AboutButton>
        </AboutText>
        <AboutMeContainer>
          <AboutMeHeader>
            <AboutItem
              onClick={() => {
                setActiveSection("Education");
              }}
              underline={activeSection === "Education"}
            >
              <box-icon
                name="graduation"
                type="solid"
                color="#ffffff"
              ></box-icon>
              <span style={{ marginLeft: "6px" }}>Education</span>
            </AboutItem>
            <AboutItem
              onClick={() => {
                setActiveSection("Hobbies");
              }}
              underline={activeSection === "Hobbies"}
            >
              <box-icon
                name="landscape"
                type="solid"
                color="#ffffff"
              ></box-icon>
              <span style={{ marginLeft: "6px" }}>Hobbies</span>
            </AboutItem>
          </AboutMeHeader>
          {activeSection === "Education" ? (
            <Education>
              {education.map((log, index) => {
                return (
                  <EducationBlock className="educationBlock">
                    <div>
                      <TimeLineCircle />
                      <EducationTimeLine />
                    </div>
                    <EducationContent>
                      <EducationTime>{log.time}</EducationTime>
                      <EducationDegree>{log.Degree}</EducationDegree>
                      <EducationCollege>{log.College}</EducationCollege>
                      <EducationDescription>
                        {log.Description}
                      </EducationDescription>
                    </EducationContent>
                  </EducationBlock>
                );
              })}
            </Education>
          ) : (
            <Hobbies>
              {hobbies.map((hobby, index) => {
                return (
                  <Hobby>
                    <box-icon
                      name={hobby.icon}
                      type="solid"
                      color="#ffffff"
                    ></box-icon>
                    <span className="hobby" style={{ marginLeft: "4%" }}>
                      {hobby.title}
                    </span>
                  </Hobby>
                );
              })}
            </Hobbies>
          )}
        </AboutMeContainer>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
