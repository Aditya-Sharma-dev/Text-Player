import React from "react";

function About(props) {
  return (
    <div
      className="container my-3"
      style={{
        backgroundColor: props.mode === "dark" ? "#173654" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1
        style={{
          backgroundColor: props.mode === "dark" ? "#173654" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        About
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#173654" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>Play with your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "rgb(63 109 154)" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Text Player gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or conversion of
              given text into different cases or removing extra spaces. You can
              also copy, and review your text and see how much time would it
              take to read your text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "#173654" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "rgb(63 109 154)" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              It is a free utility designed for the community. It is user
              friendly and designed on React.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "dark" ? "#173654" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "rgb(63 109 154)" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
