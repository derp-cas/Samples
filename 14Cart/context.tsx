import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import { reducer } from './reducer';
import { CartProps, ChildrenProps } from './types';

const url = 'https://course-api.com/react-useReducer-cart-project';

let defValue: any;

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
};

const AppContext = React.createContext(defValue);

const AppProvider = ({ children }: ChildrenProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        const response = await fetch(url);
        const cart = await response.json();
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };
    const remove = (id: number) => {
        dispatch({ type: 'REMOVE', payload: id });
    };
    const increase = (id: number) => {
        dispatch({ type: 'INCREASE', payload: id });
    };
    const decrease = (id: number) => {
        dispatch({ type: 'DECREASE', payload: id });
    };
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' });
    }, [state.cart]);

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                remove,
                increase,
                decrease,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
