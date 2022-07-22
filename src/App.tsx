import React from "react";

import { ThemeProvider, GlobalStyle } from "@theme";
import { EmptyState, Navbar, PageSection } from "@components";
import content from "@content";

import * as S from "./styles";

function App() {
  const { home } = content;
  return (
    <ThemeProvider>
      <GlobalStyle />
      <S.FirstS id="home">
        <S.TextHeader>{home.header}</S.TextHeader>
        <Navbar />
        <S.Text>{home.text}</S.Text>
      </S.FirstS>
      <PageSection id="about">
        <S.AboutWrapper>
          <S.AboutContainer>
            <div>
              <S.AboutHeader>about me!</S.AboutHeader>
              <S.AboutText>{home.text}</S.AboutText>
              <div>
                <p>/tarekcampossaleh</p>
                <p>in/tarekcampos</p>
                <p>tarekcampossaleh@gmail.com</p>
              </div>
            </div>
            <S.SideTexts>
              <S.AboutText>{home.text}</S.AboutText>
              <S.AboutText>{home.text}</S.AboutText>
            </S.SideTexts>
          </S.AboutContainer>
        </S.AboutWrapper>
      </PageSection>
      <PageSection id="projects" primary>
        <S.TextHeader>Projects</S.TextHeader>
        <EmptyState />
      </PageSection>
      <PageSection id="blog">
        <S.TextHeader>Blogposts Here</S.TextHeader>
        <EmptyState />
      </PageSection>
    </ThemeProvider>
  );
}

export default App;
