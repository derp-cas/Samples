import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

export const Backdrop = () => {
    const { showModal } = useGlobalContext();

    return (
        <StyledBackdrop>
            <div
                className={`${
                    showModal ? 'backdrop show-backdrop' : 'backdrop'
                }`}
            ></div>
        </StyledBackdrop>
    );
};

export const StyledBackdrop = styled.div`
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        visibility: hidden;
        transition: all 0.2s ease-in-out;
    }

    .show-backdrop {
        visibility: visible;
    }
`;
