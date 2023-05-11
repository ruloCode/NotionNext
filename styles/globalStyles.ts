import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --z-index-0: 0;
  --z-index-10: 10;
  --z-index-20: 20;
  --z-index-30: 30;
  --z-index-40: 40;
  --z-index-50: 50;
  --z-index-auto: auto;

  --colors-brand-yellow: #F29F05;
  --colors-brand-grey: #1F2731;
  --colors-white: #F2F2F2;
  --colors-black: #090C0F;
 
  --spacing-5: 0.25rem;
  --spacing-10: 0.5rem;
  --spacing-15: 0.75rem;
  --spacing-20: 1rem;
  --spacing-30: 1.5rem;
  --spacing-40: 3rem;
  --spacing-50: 4rem;


  --font-family-primary: 'Roboto', sans-serif;
  --font-family-secondary: 'Roboto', sans-serif;

  --font-weight-normal: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;


  --font-size-0: .75rem;
  --font-size-1: .875rem;
  --font-size-2: 1rem;
  --font-size-3: 1.25rem;
  --font-size-4: 1.5rem;
  --font-size-5: 2rem;
  --font-size-6: 2.5rem;
  --font-size-7: 4rem;
  --font-size-base: 16px;


  --border-radius-none: 0;
  --border-radius-small: 0.125rem;
  --border-radius-medium: 0.5rem;
  --border-radius-large: 1rem;
  --border-radius-xlarge: 2rem;
}
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
  font-size: var(--font-size-4);
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media screen and (min-width: 768px) {
      font-size: var(--font-size-6);
  }
}

.subtitle {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-semibold);

  @media screen and (min-width: 768px) {
    font-size: var(--font-size-5);
  }

  &-small {
    font-size: var(--font-size-1);
    @media screen and (min-width: 768px) {
     font-size: var(--font-size-4);
    }
  }
}

.coverImage {
  max-width: 42rem;
  width: 100%;
  height: 100%;

}

`;

export default GlobalStyles;
