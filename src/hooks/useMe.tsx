import { useAppSelector } from "../hooks";

export function useMe() {
    const user = useAppSelector((state) => state.user);

    if (!user) throw new Error("User not found");

    return user;
}
