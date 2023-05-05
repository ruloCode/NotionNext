import React, { useState } from "react";
import styled from "styled-components";

import { GrLanguage } from "react-icons/gr";
const NavItem = styled.a`
color: white;
text-decoration: none;
margin-right: 20px;
font-size: 1.2rem;
cursor: pointer;
&:hover {
  color: palevioletred;
}
`;

const LanguageContainer = styled.div`
position: absolute;
border: red solid 1px;
display: flex;
flex-direction: column;
width: 85px;
`;
const LanguageButtonStyled = styled.div`
position: relative;
width: 85px;
/* button {
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-transform: none;
  cursor: pointer;
 
} */
`;

const LanguageButton = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  

  return (
    <div>
      hola
    </div>
  );
};

export default LanguageButton;
