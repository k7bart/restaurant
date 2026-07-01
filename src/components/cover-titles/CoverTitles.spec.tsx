import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CoverTitles from "./CoverTitles";

describe("CoverTitles component", () => {
    it("renders the title and subtitle correctly", () => {
        render(<CoverTitles title="Test Title" subtitle="Test Subtitle" />);

        expect(screen.getByText("Test Title")).toBeInTheDocument();
        expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    });

    it("renders the optional text when provided", () => {
        render(
            <CoverTitles
                title="Test Title"
                subtitle="Test Subtitle"
                text="Optional Text"
            />
        );

        expect(screen.getByText("Optional Text")).toBeInTheDocument();
    });

    it("does not render the optional text when not provided", () => {
        render(<CoverTitles title="Test Title" subtitle="Test Subtitle" />);

        expect(screen.queryByText("Optional Text")).not.toBeInTheDocument();
    });
});
