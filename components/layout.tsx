import Navbar from "./NavBar/Navbar";
import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import styled from "styled-components";

export default function Layout({ preview, children }) {
  const LayoutContainer = styled.div`
    min-height: 100vh;
  `;
  return (
    <>
      <Meta />
      <LayoutContainer>
        <Navbar />
        <main>{children}</main>
      </LayoutContainer>

      
      <Footer />
    </>
  );
}
