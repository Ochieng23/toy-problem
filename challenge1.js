const acceptsTwo = (a,b) => {
    return {true: `${a} is greater than ${b}`, false: `${a} is equal to ${b}`}[a > b] || `${a} is smaller than ${b}`;
}