import React from 'react';
import { multiply, sum } from '../utilities/Calculate';
const Shoes = () => {
    const first = 30;
    const second = 20;
    const total = sum(first, second);
    const result = multiply(first, second)
    return (
        <div>
            <h2>This is Shoes Components</h2>
            <p>Multiply:{result} and Sum:{total}</p>
        </div>
    );
};

export default Shoes;