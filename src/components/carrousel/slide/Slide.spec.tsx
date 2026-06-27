import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Slide from "./Slide";

describe("Slide component", () => {
    it("renders slide content correctly", () => {
        const { getByText } = render(<Slide slideContent="Test Content" />);
        expect(getByText("Test Content")).toBeInTheDocument();
    });

    it("applies default background styles", () => {
        const { container } = render(<Slide slideContent="Test Content" />);
        expect(container.firstChild).toHaveStyle(
            "background-color: rgba(0, 0, 0, 0)"
        );
    });

    it("applies default styles correctly", () => {
        const { container } = render(<Slide slideContent="Test Content" />);
        expect((container.firstChild as HTMLElement).className).toContain("slide");
    });
});
