import {
  fireEvent,
  render,
  screen,
  act,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import React from "react";
import App from "../src/app";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createTestStore } from "../src/utils/createTestStore";

describe("gonna test app", () => {
  let store;
  beforeEach(() => {
    store = createTestStore();
  });
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it("should match snapshot", () => {
    const app = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <App></App>
          </Provider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
  it("should render app properly", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App></App>
        </Provider>
      </MemoryRouter>,
    );
    const text = await screen.findByTestId("counter");
    const add = await screen.findByText("+");
    const sub = await screen.findByText("-");
    expect(text).toHaveTextContent("0");
    act(() => {
      fireEvent.click(add);
    });
    expect(text).toHaveTextContent("1");
    act(() => {
      fireEvent.click(sub);
    });
    act(() => {
      fireEvent.click(sub);
    });
    expect(text).toHaveTextContent("-1");
  });
});
