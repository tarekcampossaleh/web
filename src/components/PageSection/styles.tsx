import styled from "styled-components";

export const Section = styled.section<{ isPrimary?: boolean }>`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 5vw;
  box-sizing: border-box;

  background: ${({ theme: { colors }, isPrimary }) =>
    isPrimary ? colors.primary : colors.secondary};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 20px;
`;
