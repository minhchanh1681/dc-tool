"use client";

import { useState } from "react";

export default function CaseConverter() {
  const [convertType, setConvertType] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");

  const handleConvert = () => {
    let convertedText = inputText;
    if(inputText.trim() === "") {
      return;
    }

    switch (convertType) {
      case "1": // Uppercase
        convertedText = inputText.replace(/./g, (char: string) => char.toUpperCase());
        break;
      case "2": // Lowercase
        convertedText = inputText.replace(/./g, (char: string) => char.toLowerCase());
        break;
      case "3": // Camel Case
        convertedText = inputText
          .toLowerCase()
          .replace(/(?:^\w|[A-Z]|\b\w)/g, (word: string, index: number) =>
            index === 0 ? word.toLowerCase() : word.toUpperCase()
          )
          .replace(/[^a-zA-Z0-9]/g, "");
        break;
      default:
        break;
    }

    setOutputText(convertedText);
  };

  return (
    <div className="container-fluid">
      <div className="">
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
              Uppercase
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
            Lowercase
          </label>

          <input
            type="radio"
            className="btn-check"
            id="camelcase-toggle"
            name="convertType"
            value="3"
            checked={convertType === "3"}
            onChange={(e) => setConvertType(e.target.value)}
          />
          <label className="btn btn-outline-primary me-1 rounded-1" htmlFor="camelcase-toggle">
            Camel Case
          </label>
        </div>

        <div className="row">
          {/* Input Textarea */}
          <div className="col-6">
            <textarea
              className="form-control"
              rows={23}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>

          {/* Output Textarea */}
          <div className="col-6">
            <textarea
              className="form-control"
              rows={23}
              value={outputText}
              readOnly
            ></textarea>
          </div>
        </div>

        {/* Convert Button */}
        <div className="d-flex flex-row justify-content-center mt-3">
          <button className="btn btn-primary" onClick={handleConvert}>
            Convert Text
          </button>
        </div>
      </div>
    </div>
  );
}
