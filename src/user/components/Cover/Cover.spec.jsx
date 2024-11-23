import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Cover from "./Cover";
import CoverTitles from "../cover-titles/CoverTitles";

vi.mock("../cover-titles/CoverTitles", () => ({
    default: vi.fn(() => <div>Mocked CoverTitles</div>),
}));

describe("Cover", () => {
    const mockProps = {
        title: "Test Title",
        subtitle: "Test Subtitle",
        backgroundImage: "test-image.jpg",
        text: "Test Text",
    };

    it("renders the background image", () => {
        render(<Cover backgroundImage={mockProps.backgroundImage} />);

        const imageElement = screen.getByTestId("image");

        expect(imageElement).toHaveStyle(
            `background-image: url(${mockProps.backgroundImage})`
        );
    });

    it("renders with CoverTitles", () => {
        render(<Cover {...mockProps} />);

        expect(CoverTitles).toHaveBeenCalledWith(
            {
                title: mockProps.title,
                subtitle: mockProps.subtitle,
                text: mockProps.text,
            },
            {}
        );
    });

    it("logs an error if backgroundImage is missing", () => {
        const consoleErrorSpy = vi
            .spyOn(console, "error")
            .mockImplementation(() => {});

        render(<Cover title="Test Title" />);

        expect(consoleErrorSpy).toHaveBeenCalled();

        consoleErrorSpy.mockRestore();
    });
});
