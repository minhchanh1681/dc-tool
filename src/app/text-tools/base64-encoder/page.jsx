"use client";
import { useState } from "react";

export default function Base64EncoderPage() {
  const [convertType, setConvertType] = useState("");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleConvert = () => {
    let outputTextResult = inputText;

    switch (convertType) {
      case "1":
        outputTextResult = btoa(inputText);
        break;
      case "2":
        outputTextResult = atob(inputText);
        break;
      default:
        console.log("Invalid convert type");
        break;
    }
    setOutputText(outputTextResult);
  };



  return (
    <div className="container">
      <h1 className="text-center">Base64 Encoder</h1>
      <div className="btn-group my-2" role="group" aria-label="Toggle conversion type">
            <input
              type="radio"
              className="btn-check"
              id="uppercase-toggle"
              name="convertType"
              value="1"
              checked={convertType === "1"}
              onChange={(e) => setConvertType(e.target.value)}
            />
            <label className="btn btn-outline-primary me-1 rounded-1" htmlFor="uppercase-toggle">
              Encode
            </label>

          <input
            type="radio"
            className="btn-check"
            id="lowercase-toggle"
            name="convertType"
            value="2"
            checked={convertType === "2"}
            onChange={(e) => setConvertType(e.target.value)}

          />
          <label className="btn btn-outline-primary me-1 rounded-1" htmlFor="lowercase-toggle">
            Decode
          </label>
        </div>
      <div className="row">
        <div className="col-6">
          <textarea className="form-control" rows={23} value={inputText} onChange={(e)=>setInputText(e.target.value)}></textarea>
        </div>
        <div className="col-6">
          <textarea className="form-control" rows={23} value={outputText}></textarea>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary" onClick={handleConvert}>Convert Text</button>
      </div>
    </div>
  );
}
