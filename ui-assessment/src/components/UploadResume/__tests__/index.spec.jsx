import React from "react";
import { render } from "@testing-library/react";
import UploadResume from "../UploadResume";

describe("UploadResume", () => {
  it("should render correctly", () => {
    const { getByText } = render(<UploadResume />);

    expect(getByText("Sales")).toBeInTheDocument();

    const infoIconElement = document.getElementById("tooltip");

    expect(infoIconElement).toBeInTheDocument();
  });

  it("should displays correct upload information", () => {
    render(
      <UploadResume linesSaved={10} successfulUploads={10} />
    );

    const statusParagraphElement = document.getElementById("status-paragraph");

    expect(statusParagraphElement.textContent).toBe("You had 10 uploads and 10 lines added.");
  });

  it("should displays correct date information on tooltip", () => {
    const date = "2024-05-14";
    const successfulUploads = 5;
    const linesSaved = 100;

    render(
      <UploadResume
        date={date}
        successfulUploads={successfulUploads}
        linesSaved={linesSaved}
      />
    );

    const tooltipElement = document.getElementById("tooltip");

    expect(tooltipElement).toBeTruthy();

    expect(tooltipElement.textContent).toBe(
      `The last time uploaded was on ${date}`
    );
  });
});
