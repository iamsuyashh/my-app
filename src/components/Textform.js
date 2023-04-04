import React, { useState } from "react";

// Functionsss

export function Textform(props) {
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to uppercase",'Sucess')
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lowercase",'Sucess')
  };

  const handleclearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnchange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");


  // Function to download the text
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
  };

  // function for duplicates
  function handleDuplicates() {
    let wordArr = text.split(" ");
    let newText = wordArr.filter((item, pos) => {
      return wordArr.indexOf(item) === pos;
    });
    newText = newText.join(" ");
    setText(newText);
  }

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#2C3333" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>

        {/* Buttons */}
        <button className="btn btn-dark mx-2" onClick={handleupClick}>
          Covert to uppercase
        </button>
        <button className="btn btn-dark mx-2" onClick={handleloClick}>
          Covert to Lowercase
        </button>
        <button className="btn btn-dark mx-2" onClick={downloadTxtFile}>
          Download Text
        </button>
        <button className="btn btn-dark mx-2" onClick={handleDuplicates}>
          Remove Duplicates
        </button>
        <button className="btn btn-dark mx-2" onClick={handleclearClick}>
          Clear Text
        </button>


      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} words per minute to read</p>
        <h1>Preview </h1>
        <p>{text}</p>
      </div>
    </>
  );
}
