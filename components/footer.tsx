import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import LogoImage from "../public/images/Text.png";
import Image from "next/image";
import styled from "styled-components";

export default function Footer() {
  const Footer = styled.footer`
   position: relative;
   bottom: 0;
  `;
  const SocialContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    font-size: var(--font-size-4);
    min-height: 150px;
  `;

  const Copyright = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: var(--spacing-40);
  `;

  return (
    <Footer>
      <Container>
        <SocialContainer>
          <a
            href="https://github.com/ruloCode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://twitter.com/rulo_code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter socialIcon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rulocode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/rulocode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram socialIcon"></i>
          </a>
        </SocialContainer>

        <Copyright>Copyright ©2023 All rights reserved</Copyright>
      </Container>
    </Footer>
  );
}
