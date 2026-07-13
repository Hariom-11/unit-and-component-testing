import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button Component", () => {
  test("renders button without crashing", () => {
    render(<Button text="Login" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("renders correct text passed through props", () => {
    render(<Button text="Login" />);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});