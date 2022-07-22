import styled from "styled-components";

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.primary_dark};
  font-family: "Montserrat", sans-serif;
`;

export const CodeText = styled.p`
  color: ${({ theme: { colors } }) => colors.alternative_blue};
  font-family: "Fira Code", monospace;
  font-size: 64px;
`;

export const Header = styled(Text)`
  font-size: 10vw;
`;

export const SectionHeader = styled(Text)`
  font-size: 128px;
  line-height: 192px;
`;

export const Anchor = styled.a`
  all: unset;
  color: ${({ theme: { colors } }) => colors.primary_dark};
  font-family: "Montserrat", sans-serif;
`;

export const Text_32_48 = styled(Text)`
  font-size: 32px;
  line-height: 48px;
`;
