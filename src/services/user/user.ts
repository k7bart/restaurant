import type { User } from "@k7bart/restaurant-shared-types";

const checkEmailUsed = async (email: User["email"]) => {
    console.log(email);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
};

export { checkEmailUsed };
