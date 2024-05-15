import React from "react";
import { render } from "@testing-library/react";
import SupportContact from "../SupportContact";
import SupportImage from "../SupportImage";
import SupportInfo from "../SupportInfo";
import { breakpoints } from "../../../app";
import { ThemeProvider } from "styled-components";

describe("SupportComponent folder tests", () => {
  const mockSupportContact = {
    name: "John Doe",
    email: "email@email.com",
  };

  const renderWrappedComponent = (children) => {
    return render(
      <ThemeProvider theme={{ breakpoints }}>{children}</ThemeProvider>
    );
  };

  describe("SupportContact component", () => {
    it("should display the correct support contact name and email", () => {
      const { getByText } = renderWrappedComponent(
        <SupportContact supportContact={mockSupportContact} />
      );

      expect(getByText("John Doe")).toBeInTheDocument();
      expect(getByText("email@email.com")).toBeInTheDocument();
    });

    it("should render the StrongParagraph component", () => {
      const { getByText } = renderWrappedComponent(
        <SupportContact supportContact={mockSupportContact} />
      );

      expect(getByText("Your feefo support contact")).toBeInTheDocument();
    });
  });

  describe("SupportImage component", () => {
    it("should display the first letter of the name in the profile image", () => {
      const { getByText } = renderWrappedComponent(
        <SupportImage name={mockSupportContact.name} />
      );

      expect(getByText("J")).toBeInTheDocument();
    });
  });

  describe("SupportInfo component", () => {
    test("should render name correctly", () => {
      const { getByText } = renderWrappedComponent(
        <SupportInfo profile={mockSupportContact} />
      );

      const nameElement = getByText(mockSupportContact.name);

      expect(nameElement).toBeInTheDocument();
    });

    test("should render email icon and address correctly", () => {
      const { getByText } = renderWrappedComponent(
        <SupportInfo profile={mockSupportContact} />
      );

      const emailText = getByText(mockSupportContact.email);

      expect(emailText).toBeInTheDocument();
    });

    test("should render phone number correctly", () => {
      const { getByText } = renderWrappedComponent(
        <SupportInfo profile={mockSupportContact} />
      );

      const phoneNumberElement = getByText("020 3362 4208");

      expect(phoneNumberElement).toBeInTheDocument();
    });
  });
});
