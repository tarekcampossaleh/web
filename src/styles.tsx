import styled from "styled-components";

export const Header = styled.p`
  font-size: 10vw;
  color: ${({ theme: { colors } }) => colors.primary_dark};
`;

export const Section = styled.section`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FirstS = styled(Section)`
  background: ${({ theme: { colors } }) => colors.primary};
  font-family: "Montserrat", sans-serif;
`;

export const SecondS = styled(Section)`
  background: ${({ theme: { colors } }) => colors.secondary};
`;
