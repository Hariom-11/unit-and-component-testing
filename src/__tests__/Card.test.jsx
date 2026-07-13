import { render, screen } from "@testing-library/react";
import Card from "@/components/Card";

describe("Card Component", () => {
  test("renders card without crashing", () => {
    render(<Card title="React Testing" />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  test("renders correct title passed through props", () => {
    render(<Card title="React Testing" />);

    expect(screen.getByText("React Testing")).toBeInTheDocument();
  });
});