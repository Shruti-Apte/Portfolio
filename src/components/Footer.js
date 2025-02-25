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

function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>Shruti</FooterTitle>
      <FooterText>
        © 2023 | My Portfolio Website | All rights reserved
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
