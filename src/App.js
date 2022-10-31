import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import StyledComponent from "./StyledComponent";
import React from "react";
import TailwindComponent from "./TailwindComponent";

export default function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <StyledComponent></StyledComponent>
      <TailwindComponent></TailwindComponent>
    </>
  );
}
