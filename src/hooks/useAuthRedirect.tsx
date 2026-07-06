import { useLocation, useNavigate, type Location } from "react-router-dom";

type AuthRedirectState = {
    from?: Location;
};

const DEFAULT_PATH = "/profile";

function getRedirectPath(from: Location | undefined) {
    if (!from?.pathname) return DEFAULT_PATH;

    if (!from.pathname.startsWith("/") || from.pathname.startsWith("//"))
        return DEFAULT_PATH;

    return `${from.pathname}${from.search ?? ""}${from.hash ?? ""}`;
}

export function useAuthRedirect() {
    const location = useLocation();
    const navigate = useNavigate();

    const loginTo = "/login";
    const loginState = { from: location };

    const redirectPath = getRedirectPath(
        (location.state as AuthRedirectState)?.from,
    );

    const navigateAfterAuth = () => navigate(redirectPath, { replace: true });

    return { loginTo, loginState, navigateAfterAuth };
}
