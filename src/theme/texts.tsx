import styled from "styled-components";

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.primary_dark};
  font-family: "Montserrat", sans-serif;
`;

export const Header = styled(Text)`
  font-size: 10vw;
`;

export const Anchor = styled.a`
  all: unset;
  color: ${({ theme: { colors } }) => colors.primary_dark};
  font-family: "Montserrat", sans-serif;
`;
