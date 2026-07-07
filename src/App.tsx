import { Suspense, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAppSelector } from "./hooks";
import { useAuthBootstrap } from "./hooks/useAuthBootstrap";
import { protectedRoutes, publicRoutes } from "./AppRoutes";
import CallMePopup from "./components/call-me-popup/CallMePopup";
import Loader from "./components/loader/Loader";

export default function App() {
    const { isReady } = useAuthBootstrap();
    const user = useAppSelector((state) => state.user);
    const router = useMemo(
        () => createBrowserRouter(user ? protectedRoutes : publicRoutes),
        [user],
    );

    if (!isReady) return <Loader />;

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider key={user ? "auth" : "guest"} router={router} />
            </Suspense>
            <CallMePopup />
        </>
    );
}
