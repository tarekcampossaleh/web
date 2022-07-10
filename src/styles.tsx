import styled from "styled-components";
import { Texts } from "@theme";

export const Header = styled(Texts.Header)``;

// make breakpoint for small vw, change font size, line-height -> small and remove top margin
export const Text = styled(Texts.Text)`
  margin-top: 145px;
  font-size: 32px;
  line-height: 48px;
  padding: 0 10vw;
`;

export const Section = styled.section`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 5vw;
`;

export const FirstS = styled(Section)`
  background: ${({ theme: { colors } }) => colors.primary};
`;

export const SecondS = styled(Section)`
  background: ${({ theme: { colors } }) => colors.secondary};
`;
