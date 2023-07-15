import React from 'react';
import styled from 'styled-components';
import logo from "../images/logo3.png";
const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #1a1a1a;
  box-shadow: 0 0 10px #1f1f1f;
  padding-left: 15vw;
  padding-right: 15vw;
`;

const NavIcon = styled.img`
  object-fit: content;
  height: 90%;
  width: auto;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0px;
  justify-content: end;
`;

const NavMenuItem = styled.li`
  margin: 0 10px;
  font-size: 18px;
  padding-bottom: 5px;
  border-bottom: ${(props) => (props.active ? "2px solid #5b34ea" : "0px")};
  &:hover {
    transform: scale(1.1);
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: medium;
  transition: color 0.3s ease-in-out;
  &:hover {
    font-weight: semibold;
  }
`;

const Navigation = ({activeTab, setActiveTab}) => {
  return (
    <Nav>
      <a href='home' style={{height:"100%"}}><NavIcon src={logo}/></a>
      <NavMenu>
        <NavMenuItem active={activeTab==="Home"} onClick={()=> setActiveTab("Home")}>
          <NavLink href="home">Home</NavLink>
        </NavMenuItem>
        <NavMenuItem active={activeTab==="About"} onClick={()=> setActiveTab("About")}>
          <NavLink href="#about">About</NavLink>
        </NavMenuItem>
        <NavMenuItem active={activeTab==="Work"} onClick={()=> setActiveTab("Work")}>
          <NavLink href="#work">Work</NavLink>
        </NavMenuItem>
        <NavMenuItem active={activeTab==="Skills"} onClick={()=> setActiveTab("Skills")}>
          <NavLink href="#skills">Skills</NavLink>
        </NavMenuItem>
        <NavMenuItem active={activeTab==="Contact"} onClick={()=> setActiveTab("Contact")}>
          <NavLink href="#contact">Contact</NavLink>
        </NavMenuItem>
      </NavMenu>
    </Nav>
  );
}

export default Navigation;
