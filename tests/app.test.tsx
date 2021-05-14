import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import React from "react";
import App from "../src/app";

describe("gonna test app", () => {
  it("should render app properly", async () => {
    render(<App></App>);
    const text = await screen.findAllByText("Op");
    expect(text.length).toBe(1);
  });
  it("should match snapshot", () => {
    const app = renderer.create(<App></App>).toJSON();
    expect(app).toMatchSnapshot();
  });
});
