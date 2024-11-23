import { render, screen } from "@testing-library/react";
import Accordion from "./Accordion";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Accordion", () => {
    const items = [
        { title: "Item 1", content: "Content 1" },
        { title: "Item 2", content: "Content 2" },
    ];

    it("works correctly", async () => {
        render(<Accordion items={items} />);
        const header1 = screen.getByText("Item 1");
        const header2 = screen.getByText("Item 2");

        expect(header1).toBeInTheDocument();
        expect(header2).toBeInTheDocument();

        const content1 = screen.queryByText("Content 1");
        const content2 = screen.queryByText("Content 2");

        expect(content1.className).contains("hidden");
        expect(content2.className).contains("hidden");

        await userEvent.click(header1);
        expect(content1.className).contains("open");
        expect(content2.className).contains("hidden");

        await userEvent.click(header2);
        expect(content1.className).contains("open");
        expect(content1.className).not.contains("hidden");
        expect(content2.className).contains("open");
        expect(content2.className).not.contains("hidden");
    });
});
