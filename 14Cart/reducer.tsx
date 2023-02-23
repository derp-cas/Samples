import React from 'react';
import { ActionProps, CartProps, StateProps } from './types';

export const reducer = (state: StateProps, action: ActionProps) => {
    switch (action.type) {
        case 'CLEAR_CART': {
            return { ...state, cart: [] };
        }
        case 'REMOVE': {
            return {
                ...state,
                cart: state.cart.filter(
                    (cartItem) => cartItem.id !== action.payload
                ),
            };
        }
        // case 'INCREASE': {
        //     let tempCart = state.cart.map((cartItem) => {
        //         if (cartItem.id === action.payload) {
        //             return { ...cartItem, amount: cartItem.amount + 1 };
        //         }
        //         return cartItem;
        //     });
        //     return { ...state, cart: tempCart };
        // }
        // case 'DECREASE': {
        //     let tempCart = state.cart
        //         .map((cartItem) => {
        //             if (cartItem.id === action.payload) {
        //                 return { ...cartItem, amount: cartItem.amount - 1 };
        //             }
        //             return cartItem;
        //         })
        //         .filter((cartItem) => cartItem.amount !== 0);
        //     return { ...state, cart: tempCart };
        // }
        case 'INCREASE':
        case 'DECREASE': {
            let tempCart = state.cart
                .map((cartItem) => {
                    if (cartItem.id === action.payload) {
                        if (action.type === 'INCREASE') {
                            return { ...cartItem, amount: cartItem.amount + 1 };
                        }
                        if (action.type === 'DECREASE') {
                            return { ...cartItem, amount: cartItem.amount - 1 };
                        }
                    }
                    return cartItem;
                })
                .filter((cartItem) => cartItem.amount !== 0);
            return { ...state, cart: tempCart };
        }

        case 'GET_TOTALS': {
            let { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem;
                    const itemTotal = price * amount;
                    // console.log('Price: ' + price);
                    // console.log('Amount: ' + amount);
                    // console.log('TotalPrice: ' + itemTotal);
                    cartTotal.total += itemTotal;
                    cartTotal.amount += amount;

                    return cartTotal;
                },
                {
                    total: 0,
                    amount: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            return { ...state, total, amount };
        }
        case 'LOADING': {
            return { ...state, loading: true };
        }
        case 'DISPLAY_ITEMS': {
            return { ...state, cart: action.payload, loading: false };
        }
    }

    return state;
};
