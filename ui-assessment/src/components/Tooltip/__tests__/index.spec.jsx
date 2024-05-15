import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tooltip from "../Tooltip";

describe("Tooltip component", () => {
  test("should render with initial visibility", () => {
    const { getByText } = render(
      <Tooltip text="Hello World">
        <span>Hover me</span>
      </Tooltip>
    );

    expect(getByText("Hello World")).toHaveStyle("visibility: hidden");
  });

  test("shows tooltip text on mouse enter and hides on mouse leave", () => {
    const { getByText, getByTestId } = render(
      <Tooltip text="Hello World">
        <span>Hover me</span>
      </Tooltip>
    );

    const tooltipText = getByText("Hello World");
    const tooltipContainer = getByTestId("tooltip-container");

    expect(tooltipText).toHaveStyle("visibility: hidden");

    fireEvent.mouseEnter(tooltipContainer);

    expect(tooltipText).toHaveStyle("visibility: visible");

    fireEvent.mouseLeave(tooltipContainer);

    expect(tooltipText).toHaveStyle("visibility: hidden");
  });
});
