import styled from "styled-components";
import { Anchor } from "theme/texts";

export const Container = styled.li`
  display: flex;
  justify-content: center;
  padding: 10px 75px;
  gap: 56px;
`;

// TODO: add active page underline
export const Label = styled(Anchor)`
  cursor: pointer;

  &:hover {
    text-decoration-line: underline;
  }
`;
