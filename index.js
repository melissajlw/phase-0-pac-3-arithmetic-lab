// Basic addition function adds two numbers and returns the result
function add(a, b) {
    return a + b;
}

// Basic subtraction function subtracts b from a and returns the result
function subtract(a, b) {
    return a - b;
}

// Basic multiplication function multiplies two numbers and returns the result
function multiply(a, b) {
    return a * b;
}

// Basic division function divides a by b and returns the result
function divide(a, b) {
    return a / b;
}

// Basic increment function increments n and returns the result
function increment(n) {
    return ++n;
}

// Basic decrement function decrements n and returns the result
function decrement(n) {
    return --n;
}

// Parses n as an integer and returns the parsed integer, assumes base 10, returns NaN as appropriate
function makeInt(n) {
    return parseInt(n, 10);
}

// Preserves n's decimals (it parses n as a floating point number) and returns the parsed number, returns NaN as appropriate
function preserveDecimal(n) {
    return parseFloat(n);
}