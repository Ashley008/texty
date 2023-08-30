import React, { useState } from "react";
import PropTypes from "prop-types";

function Theme(props) {
  return (
    <>
      <div className="htmlForm-check htmlForm-check-inline mx-md-3" >
        <input
          className="htmlForm-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="blue"
          value="blue"
          onClick={() => props.toggleTheme("blue")}
        />
        <label className="htmlForm-check-label"  htmlFor="blue" >
          Blue
        </label>
      </div>
      <div className="htmlForm-check htmlForm-check-inline  mx-md-3">
        <input
          className="htmlForm-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="red"
          value="red"
          onClick={() => props.toggleTheme("red")}
        />
        <label className="htmlForm-check-label  ml-1" htmlFor="red">
          Red
        </label>
      </div>
      <div className="htmlForm-check htmlForm-check-inline  mx-md-3">
        <input
          className="htmlForm-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="green"
          value="green"
          onClick={() => props.toggleTheme("green")}
        />
        <label className="htmlForm-check-label ml-1" htmlFor="green">
          Green
        </label>
      </div>
      <div className="htmlForm-check htmlForm-check-inline  mx-md-3">
        <input
          className="htmlForm-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="brown"
          value="brown"
          onClick={() => props.toggleTheme("brown")}
        />
        <label className="htmlForm-check-label ml-1" htmlFor="brown">
          Brown
        </label>
      </div>
    </>
  );
}

export default Theme;
