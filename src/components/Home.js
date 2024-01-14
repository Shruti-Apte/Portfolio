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
    margin-top: 5%;
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
  }
`;

const HomeTitle = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 10px;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    text-align:left;
  }
`;

const HomeSubtitle = styled.h2`
  font-size: 4rem;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    text-align:left;
  }
`;

const HomeButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
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
`;
const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  margin-top: 100px;
`;
const Link = styled.a`
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

const Home = () => {

  useEffect(()=>{
    sr.reveal(".homeImage", { interval: 400 });
    sr.reveal(".SocialMediaLinks", {});
    sr.reveal(".homeButton", {delay: 500});
    sr.reveal(".hi", {});
    sr.reveal(".name", {});
  },[]);

  return (
    <HomeContainer id="home">
      <HomeTextContainer>
        <HomeTitle className="hi">Hi,</HomeTitle>
        <HomeTitle className="name">
          I'm <span style={{ color: "#5B34EA" }}>Shruti</span>
        </HomeTitle>
        <HomeSubtitle>
          <Typewriter
            options={{
              strings: [
                "Software Developer",
                "Adventure enthusiast",
                "Rookie Painter",
                "Anime Fan",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </HomeSubtitle>
        <HomeButton
        className="homeButton"
          href="https://drive.google.com/file/d/1pzIocclB19s1Z5WyYjSn0sgnFg2cvnF0/view?usp=drive_link"
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
            ></box-icon>
          </Link>
          <Link href="https://www.linkedin.com/in/shruti-apte-40324b188/" target="_blank">
            <box-icon
              name="linkedin"
              type="logo"
              color="#ffffff"
              animate="fade-up"
              size="25px"
              className="SocialMediaLinks"
            ></box-icon>
          </Link>
        </SocialMediaLinks>
      </HomeTextContainer>
      <Image
        src={homeImg}
        alt="shruti_img"
        className="homeImage"
      />
    </HomeContainer>
  );
};

export default Home;
