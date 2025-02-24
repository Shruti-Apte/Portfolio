import React, { useEffect } from "react";
import styled from "styled-components";
import saeloun from "../images/Work/saeloun.png";
import { sr } from "./ScrollRevel";

const CaseStudySaeloun = () => {
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

  useEffect(() => {
    sr.reveal("#viewSite", { interval: 100 });
    sr.reveal("#caseName", { interval: 100 });
    sr.reveal("#caseImage", { interval: 100 });
    sr.reveal("#caseTitle", { interval: 100 });
  }, []);

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
              href="#/"
            >
              ←
            </a>
            Saeloun</CaseStudyName>
          <CaseStudyDes>
            <span>Overview</span>
            <p>
              Saeloun is a technology consulting firm specializing in Ruby on
              Rails and React development. It offers expert solutions,
              performance optimizations, and open-source contributions to help
              businesses build scalable and efficient web applications.
            </p>
          </CaseStudyDes>
          <CaseStudyButton
            id="viewSite"
            href="https://www.saeloun.com/"
            target="_blank"
          >
            View Site
          </CaseStudyButton>
        </Overview>
        <CaseStudyImage id="caseImage" src={saeloun} />
      </Header>
      <Content>
        <Section>
          <Title id="caseTitle">Technology Used</Title>
          <Description>
            • Next.js (old)
            <br />• Liquid & Jekyll (Revamped)
          </Description>
        </Section>
        <Section>
          <Title id="caseTitle">My Role & Contributions</Title>
          <Description>
            Old website:
            <br />
            • Developed key pages using Next.js, including Teams, Contact Us,
            Life at Saeloun, and Founder's pages.
            <br />
            • Maintained and improved the website for over two years by implementing
            some new features, addressing bug fixes and enhancing
            responsiveness. <br />
            • Worked on SEO optimization to enhance website visibility and
            search engine ranking.
            <br /> <br />
            Revamped website:
            <br />
            • Developed the entire blog section, including article pages, author
            profiles, category pages, and many more related features.
            <br />
            • Designed and implemented the client’s dedicated page, ensuring a
            seamless user experience. <br />
          </Description>
        </Section>
        <Section>
          <Title id="caseTitle">Challenges & Solutions</Title>
          <Description>
            Old:
            <br />
            • Challenge: Started working on an existing Next.js project with
            only foundational knowledge of Next.js and no hands-on
            experience, making it challenging to understand the complex project
            structure.
            <br />
            • Solution: To overcome this, I collaborated with the team members, and
            quickly adapted to the project structure, improving the site’s
            functionality.
            <br /> <br />
            • Challenge: I was assigned the task of improving SEO but lacked
            prior experience and the understanding of how to approach it effectively.
            <br />
            • Solution: Quickly adopting to SEO best practices, I improved meta
            tags, optimized images, enhanced mobile responsiveness, and enhanced the
            page load speeds, which boosted the Lighthouse score from 70 to 90+.
            <br />
            <br />
            Revamped:
            <br />
            Challenge: Converting the old theme to a new one, including updates
            to color schemes, sizes, and spacing etc. while maintaining the
            consistency and functionality.
            <br />• Solution: I carefully looked into each update, ensuring a
            smooth transition to the new theme while maintaining consistency in
            designs and functionality across the blog section.
          </Description>
        </Section>
        <Section>
          <Title id="caseTitle">Impact & Results </Title>
          <Description>
            old:
            <br />
            •Developed key pages, improved SEO, and optimized performance,
            resulting in faster load times and increased organic traffic.
            <br />
            •Maintained and enhanced the site for two years, ensuring continuous
            improvements and a seamless user experience.
            <br />
            Revamped:
            <br />
            •Redevelopment of blog enhanced the aesthetic appeal and usability,
            leading to a more polished website.
            <br />
          </Description>
        </Section>
      </Content>
    </Container>
  );
};

export default CaseStudySaeloun;
