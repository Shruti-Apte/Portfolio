import React, { useEffect } from "react";
import styled from "styled-components";
import blog from "../images/Work/blog.png";
import { sr } from './ScrollRevel';

const CaseStudyOther = () => {
  const Container = styled.div`
    padding-left: 15vw;
    padding-right: 15vw;
    padding-top: 5vw;
    padding-bottom: 5vw;
    min-height: 100vh;
    background-color: #000;
    color: #fff;
  `;

  const Header = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    gap: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
    border-bottom: 1px solid #fff;

    @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  `;

  const Overview = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1.2rem;
    align-items: start;
    @media (max-width: 1024px) {
      width: 100%;
    }
  `;

  const CaseStudyName = styled.h1`
    margin: 0%;
    font-size: 3rem;
    color: #7354e8;
  `;

  const CaseStudyImage = styled.img`
    width: 50%;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
      @media (max-width: 1024px) {
      width: 100%;
    }
  `;

  const CaseStudyDes = styled.p`
    font-size: 1rem;
  `;

  const Content = styled.div`
  display: flex;
  flex-direction:column;
  gap: 5%;
  margin-bottom 2%;
  `;

  const Section = styled.section`
    display: flex;
    flex-direction:column;
  gap: 5%;
  margin-top: 5%;
  margin-bottom 5%;
  `;

  const Title = styled.div`
    color: #7354e8;
    font-size: 2rem;

    @media (max-width: 1024px) {
      font-size: 1.5rem
    }
  `;

  const Description = styled.div`
    font-size: 1.2rem;

    @media (max-width: 1024px) {
      font-size: 0.8rem
    }
  `;

  const CaseStudyButton = styled.a`
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #5b34ea;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
    margin-top: 5%;
    &:hover {
      transform: scale(1.1);
      background-color: #7354e8;
    }
  `;

  useEffect(()=>{
    sr.reveal("#viewSite", { interval: 100 });
    sr.reveal("#caseName", { interval: 100 });  
    sr.reveal("#caseImage", { interval: 100 });  
    sr.reveal("#caseTitle", { interval: 100 });  
    
  },[]);

  return (
    <Container>
      <Header>
        <Overview>
          <CaseStudyName id="caseName">
          <a
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
              href="/Portfolio"
            >
              ←
            </a>
            Saeloun Blog</CaseStudyName>
          <CaseStudyDes>
            <span>Overview</span>
            <p>
              A tech-focused blog website designed to drive traffic, enhance
              brand reach, and serve as a silent marketing tool for the company.
              It features articles on Ruby on Rails and React, providing
              valuable insights to developers while boosting company website
              engagement.
            </p>
          </CaseStudyDes>
          <CaseStudyButton id="viewSite" href="https://blog.saeloun.com/" target="_blank">
            View Site
          </CaseStudyButton>
        </Overview>
        <CaseStudyImage id="caseImage" src={blog} />
      </Header>
      <Content>
        <Section>
          <Title id="caseTitle">Technology Used</Title>
          <Description>
            • Jekyll <br />• Liquid
          </Description>
        </Section>
        <Section>
          <Title id="caseTitle">My Role & Contributions</Title>
          <Description>
            • Revamped the blog categories page, organizing 500+ blogs under different categories to improve navigation. <br/>
            • Developed the author profile page, showcasing each author's blogs to improve content accessibility. <br />
            • Fixed bad responsiveness for a seamless experience across devices. <br />
            • Maintained the site for over 2 years, implementing small features, UI improvements, and bug fixes.<br/>
            • Wrote and published blogs, adding value to the platform.<br/>
          </Description>
        </Section>
        <Section>
          <Title id="caseTitle">Challenges & Solutions</Title>
          <Description>
          • Challenge: Working with a niche technology stack (Jekyll and
            Liquid), which presented challenges due to limited documentation,
            smaller developer community, and difficulties in debugging.
            <br />• Solution: Diligently studied the documentation, quickly
            mastered the core syntax, and built a good grasp through hands-on
            problem-solving, ultimately overcoming the learning curve and
            debugging issues.<br /> <br />
            • Challenge: The project had poor responsiveness and inconsistencies
            in the user interface across different devices.
            <br />
            • Solution: Addressed the responsiveness issues by refining and
            optimizing the existing media queries.            
          </Description>
        </Section>
        <Section>
          <Title id="caseTitle">Impact & Results </Title>
          <Description>
            • Category redevelopment led to smoother navigation enhancing
            traffic to old blogs by 20%.<br/> 
            • Enhanced UI/UX by over 30%, making
            the website visually appealing and user-centric, leading to an
            overall smoother experience. <br />
            • Wrote better media queries which works across all devices.
          </Description>
        </Section>
      </Content>
    </Container>
  );
};

export default CaseStudyOther;
