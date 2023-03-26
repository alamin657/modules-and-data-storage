const sum = (first, second) => {
    return first + second;
}
const multiply = (first, second) => {
    return first * second;
}
// reduce 
const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total
}
export {
    sum,
    multiply,
    getTotalPrice as getTotal
}