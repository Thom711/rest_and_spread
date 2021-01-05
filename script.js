const sumRest = (...args) => {
    return args.reduce((prev, current) => {
        return prev + current;
    });
};

console.log(sumRest(1, 2, 3, 4, 5, 6));


const sumSpread = (arg1, arg2, arg3) => {
    return arg1 + arg2 + arg3;
};

array = [1, 2, 3];
console.log(sumSpread(...array));