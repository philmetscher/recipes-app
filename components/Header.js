import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Your Recipe</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary);
  color: #fff;
`;
