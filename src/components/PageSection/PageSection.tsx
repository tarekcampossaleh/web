import React, { Children, ReactNode } from "react";
import { Navbar } from "@components";

import * as S from "./styles";

type PageSectionProps = {
  id: string;
  children?: ReactNode;
  primary?: boolean;
};

const PageSection = ({ id, children, primary }: PageSectionProps) => (
  <S.Section id={id} isPrimary={primary}>
    <S.Wrapper>
      <Navbar />
    </S.Wrapper>
    {children}
  </S.Section>
);

export default PageSection;
