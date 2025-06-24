import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Logo from "/logo.svg";
import "./App.css";
import ChessGame from "./ChessGame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChessGame />
      <footer
        style={{
          marginTop: "40px",
          textAlign: "center",
          color: "#888",
          fontSize: "14px",
        }}
      >
        <p>© 2025 Nurkhan Masimzada. All rights reserved. </p>
      </footer>
    </>
  );
}

export default App;
