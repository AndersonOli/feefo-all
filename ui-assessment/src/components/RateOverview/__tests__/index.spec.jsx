import React from "react";
import { render } from "@testing-library/react";
import RateOverview from "../RateOverview";
import { breakpoints } from "../../../app";
import { ThemeProvider } from "styled-components";

describe("RateOverview component", () => {
  test("should render with title and percent correctly", () => {
    const title = "Test Title";
    const percent = 75;

    const { getByText } = render(
      <ThemeProvider theme={{ breakpoints }}>
        <RateOverview title={title} percent={percent} />
      </ThemeProvider>
    );

    const percentText = getByText(`${percent}%`);
    const titleText = getByText(title);

    expect(percentText).toBeInTheDocument();
    expect(titleText).toBeInTheDocument();
  });
});
