"use client";
import { useState } from "react";

export default function Base64EncoderPage() {
  const [convertType, setConvertType] = useState("1");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [toasterText, setToasterText] = useState("");

  const handleConvert = () => {
    let outputTextResult = inputText;

    switch (convertType) {
      case "1":
        const encoder = new TextEncoder();
        const uint8ArrayEncode = encoder.encode(inputText);
        outputTextResult = btoa(String.fromCharCode(...uint8ArrayEncode));
        break;
      case "2":
        try {
          const decodedStr = atob(inputText);
          const uint8Array = new Uint8Array(decodedStr.split('').map(char => char.charCodeAt(0)));
          const decoder = new TextDecoder();
          outputTextResult = decoder.decode(uint8Array);
        } catch (err) {
          setToasterText("Invalid convert type");
        };
        break;
      default:
        console.log("Invalid convert type");
        break;
    }
    setOutputText(outputTextResult);
  };



  return (
    <div className="container-fluid">
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
          <textarea
            className="form-control"
            value={inputText} // Controlled component
            onChange={(e) => setInputText(e.target.value)}
            rows={23}
          ></textarea>
        </div>
        <div className="col-6">
          <textarea
            className="form-control"
            value={outputText} // Controlled component
            rows={23}
            readOnly // If outputText should be non-editable
          ></textarea>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary" onClick={handleConvert}>Convert Text</button>
      </div>
    </div>
  );
}
