import React, { useState } from "react";

export default function Textform(props) {
  const handelUpClick = () => {
    props.showAlert(" uppercase done", "success ");
    console.log("UppercaseClick" + text);
    let tet = text.toUpperCase();
    setText(tet);
  };
  const handelLowClick = () => {
    props.showAlert(" LowerCase done", "success ");
    console.log("LowerCaseClick" + text);
    let tet = text.toLowerCase();
    setText(tet);
  };
  const handelClrClick = () => {
    let tet = "";
    setText(tet);
  };
  const handelCaseClick = () => {
    const words = text.split(" ");
    console.log(words);
    const cap = words.map((word) => {
      const capy = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      return capy;
    });
    console.log(cap);
    const tet = cap.join(" ");
    setText(tet);
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("text");
  // setText('nom nom');
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.head} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "gray",
              color: props.mode === "light" ? "black" : "white"
            }}
            id="text"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handelUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-1" onClick={handelLowClick}>
          Lowercase
        </button>
        <button className="btn btn-primary m-1" onClick={handelCaseClick}>
          Case
        </button>
        <button className="btn btn-primary m-1" onClick={handelClrClick}>
          Clear
        </button>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>your text</h1>
        <p>
          {text.split(" ").filter((word) => word.trim() !== "").length} nom nom{" "}
          {text.length}
        </p>
        <p>
          minutes to read{" "}
          {0.008 *
            (text.split(" ").filter((word) => word.trim() !== "").length - 1)}
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
