import React from 'react';
import { Backdrop } from '../../components/Backdrop';
import { KeyFeatures } from '../../components/KeyFeatures';
import { MainFooter } from '../../components/MainFooter';
import { MainHeader } from '../../components/MainHeader';
import { Modal } from '../../components/Modal';
import { Plans } from '../../components/Plans';
import { ProductOverview } from '../../components/ProductOverview';
import { useGlobalContext } from '../../context';

export const MainPage = () => {
    const { showModal } = useGlobalContext();

    if (showModal) {
        return (
            <>
                <Backdrop />
                <Modal /> ;
                <MainHeader />
                <ProductOverview />
                <Plans />
                <KeyFeatures />
                <MainFooter />
            </>
        );
    }
    return (
        <>
            <MainHeader />
            <ProductOverview />
            <Plans />
            <KeyFeatures />
            <MainFooter />
        </>
    );
};
