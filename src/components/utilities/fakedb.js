
// use local storage to manage cart data
const addToDb = (id) => {
    let shoppingCart;
    // get the shopping cart from local storage
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }
    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        // const newQuantity = quantity + 1;
        // shoppingCart[id] = newQuantity;
        shoppingCart[id] = quantity + 1;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shoppingCart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        }
    }
}
const deleteShoppingCart = () => {
    localStorage.removeItem('shoppingCart')
}
export { addToDb, removeFromDb, deleteShoppingCart }
