import React, { useState, useContext } from 'react';
import { ChildrenProps } from './types';

let defValue: any;
const AppContext = React.createContext(defValue);

const AppProvider = ({ children }: ChildrenProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isModalOpen,
                isSidebarOpen,
                openModal,
                openSidebar,
                closeModal,
                closeSidebar,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
