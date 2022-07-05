import { useState } from "react";
// import "./App.css";
import GlobalStyle from "./globalStyles";

import * as S from "./styles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />

      <S.FirstS>
        <S.Header>Hello Yo</S.Header>
      </S.FirstS>
      <S.SecondS>
        <S.Header>Hello Yo</S.Header>
      </S.SecondS>
    </>
  );
}

export default App;
