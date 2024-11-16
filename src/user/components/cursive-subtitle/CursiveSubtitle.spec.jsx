import { render, screen } from "@testing-library/react";
import CursiveSubtitle from "./CursiveSubtitle";
import { describe, expect, it } from "vitest";

describe("CursiveSubtitle component", () => {
    it("renders the provided text", () => {
        render(<CursiveSubtitle text="Test CursiveSubtitle" />);
        expect(screen.getByText("Test CursiveSubtitle")).toBeInTheDocument();
    });

    it("applies the correct class from styles", () => {
        render(<CursiveSubtitle text="Styled CursiveSubtitle" />);
        const heading = screen.getByText("Styled CursiveSubtitle");
        expect(heading.className).toContain("cursiveSubtitle");
    });
});
