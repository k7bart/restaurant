import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { describe, expect, it } from "vitest";

describe("Title component", () => {
    it("renders the provided text", () => {
        render(<Title text="Test Title" />);
        expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("applies the correct class from styles", () => {
        render(<Title text="Styled Title" />);
        const heading = screen.getByText("Styled Title");
        expect(heading.className).toContain("title");
    });
});
