import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

// import Link from "next/link";
// import Image from "next/image";
import LanguageButton from "../LanguageButton";
// import LogoSVG from "../../public/images/logo2.svg";
// import LogoWithText from "../../public/images/logo_with_text.png";
import { useRouter } from "next/router";

// import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { FaBars, FaTimes, FaLanguage } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

const Header = styled.header`
  background-color: #202833;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 20px; */
  height: 60px;
  position: relative;
  box-shadow: 0px 4px 120px rgba(0, 0, 0, 0.8);
  position: relative;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem; /* Cambia el padding a 1.25rem para que coincida con el padding del contenedor */
  height: 60px;
  position: relative;
  width: 100%;

  @media (min-width: 640px) {
    max-width: 640px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
    margin: 0 auto;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.25rem;
  }

  span {
    color: #f29f05;
  }
`;



const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: palevioletred;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isActive = (path) => {
    return router.pathname === path;
  };


  const Nav = styled.nav`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    opacity: ${open ? "1" : "0"};

    position: absolute;
    z-index: var(--z-index-50);
    top: 60px;
    right: 0;
    width: 90%;
    background-color: #282c34;
    padding: 10px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - 60px);
    transform: ${open ? "translateX(0)" : "translateX(-100%)"};
    transition: 0.3s ease-in-out;

    display: flex;
  }
`;

  return (
    <Header>
      <HeaderContainer>
        <Link href={`/`} className="hover:underline">
          <Logo>
            {/* <LogoImage src="/logo.png" alt="Logo" /> */}
            <h1>
              <span>Rulo</span>
              Code
            </h1>
          </Logo>
        </Link>

        <HamburgerMenu onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </HamburgerMenu>
        <Nav >
          <NavItem href="/posts" >
            Blog
          </NavItem>
          {/* <NavItem href="/about" isActive={isActive("/about")}>
            Works
          </NavItem>
          <NavItem href="/contact" isActive={isActive("/contact")}>
            Academy
          </NavItem> */}
        </Nav>
      </HeaderContainer>
      {/* <LanguageButton /> */}
    </Header>
  );
};

export default Navbar;
