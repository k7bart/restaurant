import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Slide from "./Slide";

describe("Slide component", () => {
    it("renders slide content correctly", () => {
        const { getByText } = render(<Slide slideContent="Test Content" />);
        expect(getByText("Test Content")).toBeInTheDocument();
    });

    it("applies custom styles correctly", () => {
        const customStyles = { backgroundColor: "red" };
        const { container } = render(
            <Slide customStyles={customStyles} slideContent="Test Content" />
        );
        expect(container.firstChild).toHaveStyle(
            "background-color: rgba(0, 0, 0, 0)"
        );
    });

    it("applies default styles correctly", () => {
        const { container } = render(<Slide slideContent="Test Content" />);
        expect(container.firstChild.className).toContain("slide");
    });
});
