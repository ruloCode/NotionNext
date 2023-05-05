import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


a {
  text-decoration: none;
  color: inherit;
}

body {
  background-color: #202833;
  color:#F2F2F2;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}


.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media screen and (min-width: 768px) {
      font-size: 2.5rem;

  }
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;



  @media screen and (min-width: 768px) {
      font-size: 2rem;
      }


}

.coverImage {
max-width: 42rem;
  width: 100%;
  height: 100%;

}


`;

export default GlobalStyles;
