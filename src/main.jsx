import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index";
import "./styles/index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./AppRoutes";
import CallMePopup from "./user/components/call-me-popup/CallMePopup";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
                <CallMePopup />
            </Suspense>
        </Provider>
    </React.StrictMode>
);
