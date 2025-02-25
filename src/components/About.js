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

  @media (max-width: 1024px) {
  padding-left: 7vw;
  padding-right: 7vw;
  }
`;

const AboutTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #5b34ea;
`;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: center;
  width: 50%;
  height: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

const AboutDesc = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
`;

const AboutButton = styled.a`
  display: inline-block;
  margin-top: 5%;
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
    @media (max-width: 1024px) {
    margin-right:auto;
    margin-left:auto;
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

const AboutContent = styled.div`

`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-top: 3%;
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
    sr.reveal(".aboutSubtitle", { interval: 50 });
    sr.reveal(".aboutDesc", { interval: 50 });
    sr.reveal(".aboutButton", { interval: 50 });
    sr.reveal(".educationBlock", { interval: 50 });
    sr.reveal(".hobby", { interval: 50 });
  }, []);

  return (
    <AboutContainer id="about">
      <AboutTitle>About</AboutTitle>
      <AboutWrapper>
        <AboutText>
          <AboutDesc className="aboutDesc">
            Hello, <br/>
            I'm Shruti Apte! <br/><br/>
            I am currently based in India and will be relocating to Wellington, NZ soon. I am also open to remote opportunities worldwide.
            <br/>
            <br/>
            My frontend development journey started with my love for
            painting and curiosity about computers. While studying BCA and MCA,
            I found a cool way to blend my artistic interest with
            technology-building beautiful websites with HTML and CSS. I was
            fascinated by how a few lines of code could create interactive
            experiences—it felt like magic! Then I
            discovered React, which took it to the next level. Now, turning
            static Figma designs into engaging, dynamic websites gives me a
            sense of fulfillment. Building flawless user experiences-it's not just
            my job, it's what I love to do!
            <br/>
            <br/>
            When I’m not coding, you can find me exploring
            new places, seeking adventures, or enjoying simple joys like
            painting, reading, or just binging any shows online. I’ve also been a summer camp instructor,
            which helped me build adaptability, persistence, and leadership-skills I use daily in my work life too. 
            <br/> <br/>
            Feel free to send me a message, let's build something awesome together!🚀
          </AboutDesc>
          <AboutButton className="aboutButton" href="https://drive.google.com/file/d/1obdQERlRWSJ_Bvd0FUUfZQ3YcD1grLPO/view?usp=sharing">
            View Resume
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
          <AboutContent id="aboutContent">
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
                      <div style={{display:"flex", gap: "2%"}}><EducationDegree>{log.Degree},</EducationDegree><EducationCollege>{log.College}</EducationCollege> </div>
                      <EducationTime>{log.grade}</EducationTime>
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
                  <Hobby id={index}>
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
          </AboutContent>
        </AboutMeContainer>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
