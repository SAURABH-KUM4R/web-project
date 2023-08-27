function useDebounce(call_back, delay=1500) {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            call_back(...args);
        }, delay);
    }
}

export default useDebounce;