import * as React from "react";
import * as ReactDOM from "react-dom";
import { render } from "@testing-library/react";

describe("Jasmine, React, react-testing-library fundamentals ", () => {
  function Hello() {
    return <div id="hello">hello</div>;
  }

  it("Display <Hello/> via ReactDOM.render", () => {
    const domContainer = document.createElement("div");
    document.body.appendChild(domContainer);
    ReactDOM.render(<Hello />, domContainer);
    const el = document.getElementById("hello");
    expect(el.innerText).toEqual("hello");
    document.body.removeChild(domContainer);
  });

  it("Display <Hello/> via via @testing-library/react render", () => {
    const { container } = render(<Hello />);
    expect(container.innerText).toEqual("hello");
  });
});
