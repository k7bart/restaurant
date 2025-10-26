type TimeoutId = ReturnType<typeof setTimeout> | undefined;

function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay = 300
): (...args: Parameters<T>) => void {
    let timeoutId: TimeoutId;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            timeoutId = undefined;
            func.apply(this, args);
        }, delay);
    };
}

export default debounce;
