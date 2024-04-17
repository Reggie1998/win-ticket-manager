import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { DraggableDiv } from "./components/draggableDiv/draggableDiv";

function App() {

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
      </a>
      <DraggableDiv initialLocation={{ x: 50, y: 200 }}></DraggableDiv>
      <DraggableDiv initialLocation={{ x: 50, y: 200 }}></DraggableDiv>
    </div>
  );
}

export default App;
