import { describe, it, expect } from "vitest";
import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";

const MockParkingPage = () => <div data-testid="ParkingPage">Parking Page</div>;

describe("testing the home page", () => {
  it("testing headings and navigation", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/parkingpage" element={<MockParkingPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Test headings
    const heading = screen.getByRole("heading", { name: /welcome to parkvue/i });
    expect(heading).toBeInTheDocument();

    const bookParkingSlotHeading = screen.getByRole("heading", {
      name: /book your parking slot now/i,
    });
    expect(bookParkingSlotHeading).toBeInTheDocument();

    const freeSpaceHeading = screen.getByRole("heading", {
      name: /do you have free unused space\?/i,
    });
    expect(freeSpaceHeading).toBeInTheDocument();

    // Test button click and navigation
    const bookNowButton = screen.getByTestId("buttonBookNow");
    fireEvent.click(bookNowButton);

    // Wait for the target route (parking page) to render
    await waitFor(() => screen.getByTestId("ParkingPage"));

    // Verify navigation by checking the presence of the target route component
    const parkingPage = screen.getByTestId("ParkingPage");
    expect(parkingPage).toBeInTheDocument();
  });
});
