import styled from "styled-components";
import Image from "next/image";

import ProfileImage from "../../public/images/rulo_profile.png";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    justify-content: flex-start;
    gap: 94px;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 50px;
  max-width: 160px;

  @media screen and (min-width: 768px) {
    margin-right: 50px;
    margin-bottom: 0;
    max-width: 260px;
  }
`;

const ImageContainer = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;


const Span = styled.span`
  color: #f29f05;
`;

const Hero = () => {
  return (
    <HeroSection>
      <div>
        <div className="title">
          Front-End Web <Span>Developer</Span>{" "}
        </div>
        <div className="subtitle">
          Hi, I'm Andrés Santana. A passionate Front-end React Developer based
          in Bogotá, Colombia.
        </div>
      </div>
      <ImageWrapper>
        <ImageContainer
          src={ProfileImage}
          alt="image"
          // width={150}
          // height={150}
        />
      </ImageWrapper>
    </HeroSection>
  );
};

export default Hero;
