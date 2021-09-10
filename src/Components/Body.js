import React, { useState } from "react";

function Body(props) {
  const [text, setText] = useState("");
  const onUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE!!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const onLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!!", "success");
  };
  const onExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const onCCClick = () => {
    var words = text.split(" ");
    var CapitalizedWords = [];
    words.forEach((element) => {
      CapitalizedWords.push(
        element[0].toUpperCase() + element.slice(1, element.length)
      );
    });
    props.showAlert("Converted to Capitalize Case!!", "success");
    setText(CapitalizedWords.join(" "));
  };
  const onClearClick = () => {
    setText("");
    props.showAlert("Text has been Cleared!!", "success");
  };
  const onCopyClick = () => {
    var copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text has been copied to clipboard!!", "success");
  };
  return (
    <>
      <div
        className="play_area my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#173654" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Enter your text here</h2>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Type here"
            rows="10"
            onChange={handleOnChange}
            value={text}
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(63 109 154)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mb-3 mx-3"
          disabled={text.length === 0}
          onClick={onUpClick}
        >
          UPPER CASE
        </button>
        <button
          className="btn btn-primary mb-3 mx-3"
          disabled={text.length === 0}
          onClick={onLoClick}
        >
          lower case
        </button>
        <button
          className="btn btn-primary mb-3 mx-3"
          disabled={text.length === 0}
          onClick={onExtraSpaces}
        >
          Remove extra spaces
        </button>
        <button
          className="btn btn-primary mb-3 mx-3"
          disabled={text.length === 0}
          onClick={onCCClick}
        >
          Capitalise Case
        </button>
        <button
          className="btn btn-primary mb-3 mx-3"
          disabled={text.length === 0}
          onClick={onCopyClick}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mb-3 mx-3"
          disabled={text.length === 0}
          onClick={onClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="words"
        style={{
          backgroundColor: props.mode === "dark" ? "#173654" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Text Details </h3>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p>
          You'll be done reading with this text in{" "}
          {text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length * 0.008}{" "}
          minutes
        </p>
        <h2>
          {text.length === 0
            ? "Enter some text in the box above to preview"
            : "Preview your text here"}
        </h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Body;
