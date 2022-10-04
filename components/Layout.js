import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <PageWrap>
        <main>{children}</main>
      </PageWrap>
      <Footer />
    </>
  );
}

const PageWrap = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 20px;
`;
