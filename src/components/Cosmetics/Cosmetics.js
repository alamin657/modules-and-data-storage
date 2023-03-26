import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../utilities/Calculate';
const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    const total = getTotal(cosmetics);
    return (
        <div>
            <h2>Welcome to Cosmetics Store</h2>
            <p>Total:{total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    cosmetic={cosmetic}
                    key={cosmetic.id}></Cosmetic>
                )

            }
        </div>
    );
};
export default Cosmetics;
/**
   const cosmetics = [
        { id: 1, name: 'Alta', price: 100 },
        { id: 2, name: 'Palis', price: 200 },
        { id: 3, name: 'Malis', price: 300 },
        { id: 4, name: 'Balis', price: 400 },
        { id: 5, name: 'Nalis', price: 500 },
    ]
    {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}>
                </Cosmetic>)
            }
    Destructuring:
    const { id, name, price } = props.cosmetic;
    <p>Id:{id}</p>
            <p>Name:{name}</p>
            <p>Price:${price}</p>
 */