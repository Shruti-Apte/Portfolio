import React from "react";
import styled from "styled-components";
import homeImg from "../images/Personal.png";
import Typewriter from "typewriter-effect";
import { sr } from "./ScrollRevel";
import { useEffect } from "react";

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding-left: 15vw;
  padding-right: 15vw;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
`;

const Image = styled.img`
  width: 30%;
  border-radius: 10%;
  z-index: 5;

  @media (max-width: 1024px) {
    max-width: 50%;
    max-height: 50%;
    border-radius: 10%;
  }
`;

const HomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

const HomeTitle = styled.h1`
  font-size: 5rem;
  text-align: left;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: left;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
    text-align: left;
  }

  @media (max-width: 1280px) {
    font-size: 2.5rem;
    text-align: left;

    @media (max-width: 1024px) {
    font-size: 1.5rem;
    text-align: left;
  }
  }
`;

const HomeSubtitle = styled.div`
  font-size: 1.2rem;
  text-align: left;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 80%;
  margin-top: 5%;
  margin-bottom: 7.5%;
  background-color: inherit;

  @media (max-width: 768px) {
    font-size: 0.5rem;
    text-align: center;
  }

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    text-align: center;
  }

  @media (max-width: 1280px) {
    font-size: 0.8rem;
  }
`;

const HomeButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #5b34ea;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #7354e8;
  }

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
`;
const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  margin-top: 10%;
`;
const Link = styled.a`
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

const Home = ({setActiveTab}) => {
  useEffect(() => {
    sr.reveal(".homeImage", { interval: 100 });
    sr.reveal(".SocialMediaLinks", {});
    sr.reveal(".homeButton", { delay: 100 });
    sr.reveal(".hi", {});
    sr.reveal(".name", {});
  }, []);

  return (
    <HomeContainer id="home">
      <HomeTextContainer>
        <HomeTitle className="hi">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(`Hi, I'm <span style="color: #7354e8;">Shruti</span>`)
                .callFunction(() => {
                  document.querySelector(".Typewriter__cursor").style.display = "none";
                })
                .start();
            }}
          />
        </HomeTitle>
        <HomeSubtitle>
          I enjoy creating awesome websites with clean design patterns and adopting to
          the latest technologies. With over 3+ years of experience, I build engaging and
          functional solutions that fit your needs perfectly. <br/> <br/> Let’s work together to bring your ideas to life!
        </HomeSubtitle>
        <HomeButton
          className="homeButton"
          href="https://drive.google.com/file/d/1obdQERlRWSJ_Bvd0FUUfZQ3YcD1grLPO/view?usp=sharing"
          target="_blank"
        >
          View Resume
        </HomeButton>
        <SocialMediaLinks className="SocialMediaLinks">
          <Link href="https://github.com/Shruti-Apte/" target="_blank">
            <box-icon
              name="github"
              type="logo"
              color="#ffffff"
              animate="fade-up"
              size="25px"
              className="SocialMediaLinks"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/shrutiapte/" target="_blank">
            <box-icon
              name="linkedin"
              type="logo"
              color="#ffffff"
              animate="fade-up"
              size="25px"
              className="SocialMediaLinks"
            />
          </Link>
        </SocialMediaLinks>
      </HomeTextContainer>
      <Image src={homeImg} alt="shruti_img" className="homeImage" />
    </HomeContainer>
  );
};

export default Home;
