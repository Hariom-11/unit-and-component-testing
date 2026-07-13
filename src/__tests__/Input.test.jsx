import { render, screen } from "@testing-library/react";
import Input from "@/components/Input";

describe("Input Component", () => {
  test("renders input without crashing", () => {
    render(<Input placeholder="Enter your name" />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  test("renders correct placeholder passed through props", () => {
    render(<Input placeholder="Enter your name" />);

    expect(
      screen.getByPlaceholderText("Enter your name")
    ).toBeInTheDocument();
  });
});