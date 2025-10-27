const checkEmailUsed = async (email) => {
    console.log(email);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
};

export { checkEmailUsed };
