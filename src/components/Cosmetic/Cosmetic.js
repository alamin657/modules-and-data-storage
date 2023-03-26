import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import './Cosmetic.css';
const Cosmetic = (props) => {
    const { name, gender, id } = props.cosmetic
    const addToCart = (id) => {
        addToDb(id);
    }
    const removeToCart = (id) => {
        removeFromDb(id);
    }
    const deleteAlltoCart = id => {
        deleteShoppingCart(id);
    }
    return (
        <div className='cosmetics'>
            <h4>Name:{name}</h4>
            <p>Gender:{gender}</p>
            <p>Id:{id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeToCart(id)}>Remove to Cart</button>
            <button onClick={() => deleteAlltoCart(id)}>DeleteAll to Cart</button>
        </div>
    );
};

export default Cosmetic;