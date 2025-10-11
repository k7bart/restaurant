const checkEmailUsed = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
};

export { checkEmailUsed };
