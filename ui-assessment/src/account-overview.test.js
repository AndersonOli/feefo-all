import { render, screen } from "@testing-library/react";
import AccountOverview from "./account-overview";
import { ThemeProvider } from "styled-components";
import { breakpoints } from "./app";

const accountOverviewStub = {
  supportContact: {
    name: "John Smith",
    email: "john.smith@feefo.com",
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};

const renderWrapped = () => {
  return render(
    <ThemeProvider theme={{ breakpoints }}>
      <AccountOverview data={accountOverviewStub} />
    </ThemeProvider>
  );
}

describe("AccountOverview tests", () => {
  test("should display the correct name", () => {
    renderWrapped();
  
    const element = screen.getByText(/John Smith/i);
  
    expect(element).toBeInTheDocument();
  });

  test("should display the correct email", () => {
    renderWrapped();
  
    const element = screen.getByText(/john.smith@feefo.com/i);
  
    expect(element).toBeInTheDocument();
  });

  test("should display the correct upload success rate", () => {
    renderWrapped();
  
    const element = screen.getByText(/37.5%/i);
  
    expect(element).toBeInTheDocument();
  });

  test("should display the correct lines added rate", () => {
    renderWrapped();
  
    const element = screen.getByText(/20%/i);
  
    expect(element).toBeInTheDocument();
  });
});
