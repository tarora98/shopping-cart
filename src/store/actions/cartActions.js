import axios from 'axios';
export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            quantity: 1
        }
    }
};

export const removeFromCart = (imdbID) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            imdbID: imdbID
        }
    }
};

export const updateCartQuantity = (imdbID, quantity) => {
    return {
        type: 'UPDATE_CART_QUANTITY',
        payload: {
            imdbID,
            quantity: quantity
        }
    }
};

export const pList = (data) => {
    console.log('HERE', data);
    return {
        type: 'plist',
        payload: data
    };
};



