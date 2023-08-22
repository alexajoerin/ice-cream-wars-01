import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Chocolate");
  const [darkMode, setDarkMode] = useState(true);
  const [size, setSize] = useState(45);
  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      <div className={`ad${darkMode ? " Dark" : ""}`}>
        <p className="FlavorVote">
          Vote For <span style={{ fontSize: size + "px" }}>{flavor}</span>
        </p>
      </div>
      <h3>What to Support</h3>
      <div className="SupportButtonContainer">
        <button
          onClick={() => setFlavor("Chocolate")}
          disabled={flavor === "Chocolate"}
        >
          Chocolate
        </button>
        <button
          onClick={() => setFlavor("Vanilla")}
          disabled={flavor === "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => setFlavor("Strawberry")}
          disabled={flavor === "Strawberry"}
        >
          Strawberry
        </button>
      </div>
      <h3>Color Theme</h3>
      <div className="ColorButtonContainer">
        <button
          onClick={() => setDarkMode(false)}
          disabled={darkMode === false}
        >
          Light
        </button>
        <button onClick={() => setDarkMode(true)} disabled={darkMode === true}>
          Dark
        </button>
      </div>
      <h3>Font Size</h3>
      <div className="FontButtonContainer">
        <button onClick={() => setSize((prev) => prev - 1)}>Down</button>
        <p>{size}</p>
        <button onClick={() => setSize((prev) => prev + 1)}>Up</button>
      </div>
    </div>
  );
};

export default AdDesigner;
