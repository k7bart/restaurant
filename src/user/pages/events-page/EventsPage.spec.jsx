import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store/index.js";

import EventsPage from "./EventsPage";

describe("EventsPage", () => {
    it("renders the EventsPage correctly", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <EventsPage />
                </BrowserRouter>
            </Provider>
        );

        const logo = screen.getByTestId("logo");
        expect(logo).toBeInTheDocument();

        const carrousel = screen.getByTestId("carrousel");
        expect(carrousel).toBeInTheDocument();

        const navbar = screen.getByTestId("navbar");
        expect(navbar).toBeInTheDocument();

        const eventPreviews = screen.getAllByTestId("event-preview");
        expect(eventPreviews).toHaveLength(3);
    });
});
