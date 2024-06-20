import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

function randomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("");

  const handleRGBColorChange = (colorType) => {
    if (colorType === "rgb") {
      let randR = Math.floor(Math.random() * 256);
      let randG = Math.floor(Math.random() * 256);
      let randB = Math.floor(Math.random() * 256);
      const RGB = `rgb(${randR},${randG},${randB})`;
      // console.log(RGB);
      setColor(RGB);
    }
  };

  const handleHEXColorChange = (colorType) => {
    if (colorType === "hex") {
      let hex = "#";
      for (let i = 0; i < 6; i++) {
        const hrand = Math.floor(Math.random() * 16);
        hex += hrand.toString(16);
      }
      // console.log(hex);
      setColor(hex);
    }
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleRGBColorChange();
    else if (typeOfColor === "hex") handleRGBColorChange();
  }, [typeOfColor]);

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: color, height: "100vh", width: "100vh" }}
      >
        <div className="buttons">
          <button
            onClick={() => {
              setTypeOfColor("rgb");
              handleRGBColorChange(typeOfColor);
            }}
          >
            Generate RGB color
          </button>
          <button
            onClick={() => {
              setTypeOfColor("hex");
              handleHEXColorChange(typeOfColor);
            }}
          >
            Generate Hex color
          </button>
          <button
            onClick={() => {
              if (typeOfColor === "rgb") handleRGBColorChange(typeOfColor);
              else handleHEXColorChange(typeOfColor);
            }}
          >
            Generate Random Color
          </button>
        </div>
        <div>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
}

export default randomColor;
