import React from "react";
import * as S from "./styles";
const Navbar = () => (
  <S.Container>
    <S.Label href="#home">Home</S.Label>
    <S.Label href="#about">About</S.Label>
    <S.Label href="#projects">Projects</S.Label>
    <S.Label href="#blog">Blog</S.Label>
  </S.Container>
);

export default Navbar;
