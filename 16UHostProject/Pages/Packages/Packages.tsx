import React from 'react';
import styled from 'styled-components';
import { Backdrop } from '../../components/Backdrop';
import { MainFooter } from '../../components/MainFooter';
import { MainHeader } from '../../components/MainHeader';
import { PackagesSection } from '../../components/PackagesSection';
import backgroundImage from '../../photos/plans-background.jpg';

export const Packages = () => {
    return (
        <>
            <Backdrop />
            <StyledPackages>
                <div className='background'></div>
                <MainHeader />
                <PackagesSection />
                <MainFooter />
            </StyledPackages>
        </>
    );
};

export const StyledPackages = styled.main`
    /* background: url(${backgroundImage});
    position: fixed;
    width: 100%;
    height: 100%; */
    //scrollbar hotfix
    /* overflow: -moz-scrollbars-vertical;
    overflow-y: scroll; */

    .background {
        background: url(${backgroundImage});
        filter: grayscale(40%);
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }
`;
