import styled from "styled-components";
import { Texts } from "@theme";

export const TextHeader = styled(Texts.Header)``;

//TODO: make breakpoint for small vw, change font size, line-height -> small and remove top margin
export const Text = styled(Texts.Text_32_48)`
  margin-top: 145px;
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

//TODO: send this about section to a different component inside /pageSeciton
export const AboutWrapper = styled.div`
  height: 80vh;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2vw;
`;

export const SideTexts = styled(AboutContainer)`
  flex-direction: column;
`;

//TODO: provisional typography, gonna make it into texts later
export const AboutText = styled(Texts.Text_32_48)`
  display: flex;
  align-items: center;
  text-align: justify;
`;

export const AboutHeader = styled(Texts.SectionHeader)``;
