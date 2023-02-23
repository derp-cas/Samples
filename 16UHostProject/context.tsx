import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import { ChildrenProps } from './types';

let defValue: any;

const AppContext = React.createContext(defValue);

const AppProvider = ({ children }: ChildrenProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <AppContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </AppContext.Provider>
    );
};
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
