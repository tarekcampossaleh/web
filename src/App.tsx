import { useState } from "react";
import { ThemeProvider, GlobalStyle } from "@theme";
import { Navbar } from "@components";

import * as S from "./styles";

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <S.FirstS id="home">
          <S.Header>Welcome.</S.Header>
          <Navbar />
          <S.Text>
            need to find a cool text to put right here, Im testing if this text
            can break the line and still looking beautiful for my website, I
            think so, right?
          </S.Text>
        </S.FirstS>
        <S.SecondS id="about">
          <S.Header>About me</S.Header>
        </S.SecondS>
        <S.FirstS id="projects">
          <S.Header>Projects</S.Header>
        </S.FirstS>
        <S.SecondS id="blog">
          <S.Header>Blogposts Here</S.Header>
        </S.SecondS>
      </ThemeProvider>
    </>
  );
}

export default App;
