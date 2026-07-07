import { Navigate, useLocation } from "react-router-dom";

export default function LoginRedirect() {
    const location = useLocation();

    return <Navigate to="/login" state={{ from: location }} replace />;
}
