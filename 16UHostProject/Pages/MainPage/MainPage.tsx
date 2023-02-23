import React from 'react';
import { Backdrop } from '../../components/Backdrop';
import { KeyFeatures } from '../../components/KeyFeatures';
import { MainFooter } from '../../components/MainFooter';
import { MainHeader } from '../../components/MainHeader';
import { Modal } from '../../components/Modal';
import { Plans } from '../../components/Plans';
import { ProductOverview } from '../../components/ProductOverview';

export const MainPage = () => {
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
};
