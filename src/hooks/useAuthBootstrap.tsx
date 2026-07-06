import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { setUser } from "../store";
import { authService } from "../services/auth-service";

export function useAuthBootstrap() {
    const dispatch = useAppDispatch();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        authService
            .getMe()
            .then(({ data: user }) => dispatch(setUser(user)))
            .catch(() => {})
            .finally(() => setIsReady(true));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { isReady };
}
