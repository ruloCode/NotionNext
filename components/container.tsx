import styled from 'styled-components';

const ContainerWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
  width: 100%;


  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export default function Container({ children }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}
