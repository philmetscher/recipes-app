import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <p>2022 © Phil Metscher</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gray);
`;
