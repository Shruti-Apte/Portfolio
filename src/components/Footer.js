import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 2rem;
  font-size: 1.2rem;
`;

const FooterTitle = styled.span`
  margin: 10px;
  font-size: 2rem;
  font-weight: semibold;
`;


const FooterText = styled.p`
  margin: 0px;
  margin-top: 10px;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  margin-top: 10px;
`;
const Link = styled.a`
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>Shruti</FooterTitle>
        <SocialMediaLinks className="SocialMediaLinks">
          <Link href="https://www.instagram.com/shruti.apte/" target="_blank">
            <box-icon
              name="instagram"
              type="logo"
              color="#ffffff"
              animate="fade-up"
              size="25px"
              className="SocialMediaLinks"
            ></box-icon>
          </Link>
          <Link href="https://www.snapchat.com/add/shruti-apte?share_id=ATcu1fz1Fw8&locale=en-IN" target="_blank">
            <box-icon
              name="snapchat"
              type="logo"
              color="#ffffff"
              animate="fade-up"
              size="25px"
              className="SocialMediaLinks"
            ></box-icon>
          </Link>
        </SocialMediaLinks>
      <FooterText>
        © 2023 | My Portfolio Website | all rights reserved
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
