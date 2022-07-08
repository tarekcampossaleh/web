import { useState } from "react";
import { ThemeProvider, GlobalStyle } from "@theme";

import * as S from "./styles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <S.FirstS>
          <S.Header>Welcome.</S.Header>
          <h2>Home About Projects Blogposts Contact</h2>
          <p>Almost before we knew it, we had left the ground</p>
        </S.FirstS>
        <S.SecondS>
          <S.Header>Hello Yo</S.Header>
        </S.SecondS>
      </ThemeProvider>
    </>
  );
}

export default App;
