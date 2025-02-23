import React, {useState} from 'react';
import styled from 'styled-components';
import logo from "../images/logo.png";
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

const NavIconWrapper = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    height: 80px;
  }
`;

const NavIcon = styled.img`
  object-fit: contain;
  height: 100%;
  width: auto;
`;

const BurgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
    font-size: 24px;
  }
`;


const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0px;
  justify-content: end;

  @media (max-width: 1024px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background-color: #1a1a1a;
    padding: 10px;
    margin: 0;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };
  return (
    
    <Nav>
      <NavIconWrapper href="/Portfolio"><NavIcon src={logo}/></NavIconWrapper>
      <BurgerIcon onClick={toggleMenu}>&#9776;</BurgerIcon>
      <NavMenu  isOpen={isMenuOpen}>
        <NavMenuItem active={activeTab==="Home"} onClick={()=> handleMenuItemClick("Home")}>
          <NavLink href="/Portfolio">Home</NavLink>
        </NavMenuItem>
        <NavMenuItem active={activeTab==="Skills"} onClick={()=> handleMenuItemClick("Skills")}>
          <NavLink href="/Portfolio#skills">Skills</NavLink>
        </NavMenuItem>
        <NavMenuItem active={activeTab==="Work"} onClick={()=> handleMenuItemClick("Work")}>
          <NavLink href="/Portfolio#work">Work</NavLink>
        </NavMenuItem>
        <NavMenuItem active={activeTab==="Blog"} onClick={()=> handleMenuItemClick("Blog")}>
          <NavLink href="/Portfolio/blog">Blog</NavLink>
        </NavMenuItem>
        {/* <NavMenuItem active={activeTab==="Project"} onClick={()=> handleMenuItemClick("Blog")}>
          <NavLink href="/Portfolio/project">Project</NavLink>
        </NavMenuItem> */}
        <NavMenuItem active={activeTab==="About"} onClick={()=> handleMenuItemClick("About")}>
          <NavLink href="/Portfolio#about">About</NavLink>
        </NavMenuItem>
        <NavMenuItem active={activeTab==="Contact"} onClick={()=> handleMenuItemClick("Contact")}>
          <NavLink href="/Portfolio#contact">Contact</NavLink>
        </NavMenuItem>
      </NavMenu>
    </Nav>
  );
}

export default Navigation;
