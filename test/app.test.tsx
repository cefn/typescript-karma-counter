import * as React from "react";
import { render } from "@testing-library/react";

import { App } from "../src/app";

describe("App component behaviour", () => {
  it("Counter launches at 0", async () => {
    const { findByText } = render(<App />);
    await findByText("0");
    return;
  });

  it("User can add to Counter", async () => {
    const { findByText } = render(<App />);
    const button = await findByText("Increase");
    button.click();
    await findByText("1");
    return;
  });

  it("User can take from Counter", async () => {
    const { findByText } = render(<App />);
    const button = await findByText("Decrease");
    button.click();
    await findByText("-1");
    return;
  });

  it("Repeated presses are all counted", async () => {
    const { findByText } = render(<App />);
    const button = await findByText("Increase");
    button.click();
    button.click();
    button.click();
    button.click();
    await findByText("4");
    return;
  });
  //   await new Promise(() => {})
  //   return;
  // }, 1000000);
});
