import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import DisplayCards from "../components/DisplayCards";
import { BrowserRouter } from "react-router-dom";

describe("display cards", () => {
  it("checks whether text is present or not", () => {
    render(
      <BrowserRouter>
        <DisplayCards />
      </BrowserRouter>
    );

    // Debug the rendered output
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("Do")
    // Assertions to check if specific text is present
    
  });
  
});
