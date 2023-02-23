import React from 'react';
import styled from 'styled-components';

export const Backdrop = () => {
    return <StyledBackdrop></StyledBackdrop>;
};

export const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;
