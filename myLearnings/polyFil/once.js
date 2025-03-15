function once(fn, context) {
    let ran;

    return function () {
        if (fn) {
            ran = fn.apply(context || this, arguments);
            fn = () => {} // Prevent re-execution
        }

        return ran;
    }
}

const hello = once((a, b) => console.log('Hello', a, b));

hello(1, 2);
hello(2, 3);
hello(3, 4);
hello(4, 5);