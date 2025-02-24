import React, { useEffect } from "react";
import styled from "styled-components";
import workImg1 from "../images/Work/InvoiceList.png";
import { sr } from "./ScrollRevel";

const CaseStudyMiru = () => {
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
      font-size: 1.5rem;
    }
  `;

  const Description = styled.div`
    font-size: 1.2rem;

    @media (max-width: 1024px) {
      font-size: 0.8rem;
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
            Miru
          </CaseStudyName>
          <CaseStudyDes>
            <span>Overview</span>
            <p>
              Miru is an open-source tool developed and maintained by Saeloun
              for time tracking and invoice management. It also offers reporting
              analysis, team, leaves and client management, along with few other
              interesting features. It streamlines workflows and enhances
              productivity for small businesses worldwide.
            </p>
          </CaseStudyDes>
          <CaseStudyButton
            id="viewSite"
            href="https://miru.so/"
            target="_blank"
          >
            View Site
          </CaseStudyButton>
        </Overview>
        <CaseStudyImage id="caseImage" src={workImg1} />
      </Header>
      <Content>
        <Section>
          <Title id="caseTitle">Technology Used</Title>
          <Description>
            • React Js
            <br />• Ruby on Rails
          </Description>
        </Section>
        <Section>
          <Title id="caseTitle">My Role & Contributions</Title>
          <Description>
            • Built over 70% of the Miru's core frontend functionality, by
            developing critical modules such as Invoicing, Report Analysis,
            Leaves, Clients, and Team Management. <br />
            • Developed reusable UI components such as tables, lists, modals,
            dropdowns, dashboards, pagination, and more to streamline
            development. <br />
            • Integrated REST APIs, implemented key features such as invoice
            downloads, filters, search, data export, real-time calculations, and
            improved efficiency by creating custom hooks. <br />• Worked on
            backend tickets, bug fixes, code reviews, and refactoring to improve
            stability and maintainability.
          </Description>
        </Section>
        <Section>
          <Title id="caseTitle">Challenges & Solutions</Title>
          <Description>
            • Challenge: The project lacked a mobile-first approach, leading to
            poor responsiveness and inconsistent UI across devices.
            <br />
            • Solution: Revamped most of the project by redesigning components
            and implementing mobile-friendly layouts, ensuring a seamless user
            experience across all screen sizes.
            <br /> <br />
            • Challenge: When I started on the project, it was messy and unstructured because
            many developers contributed to it.
            <br />
            • Solution: Refactored the code, improving readability, code
            maintainability, and the overall performance.
            <br /> <br />
            • Challenge: The lack of a stable backend team meant working with
            different developers for various features, causing integration challenges
            and delays. <br />• Solution: Maintained clear communication,
            adaptability, and teamwork, quickly aligning with new team members
            to ensure seamless CI/CD.
          </Description>
        </Section>
        <Section>
          <Title id="caseTitle">Impact & Results </Title>
          <Description>
            • Enhanced UI/UX by over 50%, making the website visually appealing
            and user-centric, led to an overall smoother experience. <br />
            • Built reusable UI components, and custom hooks boosting developer's efficiency.
            <br />
            • Ensured smooth integration despite changes in the backend team.<br />
            • Refactored the codebase to streamline development and reduce technical debt.<br />
            • Improved maintainability, making future enhancements faster and more efficient.
            <br />
          </Description>
        </Section>
      </Content>
    </Container>
  );
};

export default CaseStudyMiru;
