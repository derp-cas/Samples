import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../photos/freedom.jpg';

export const ProductOverview = () => {
    return (
        <StyledProductOverview>
            <h1 className='title'>Get the freedom you deserve!</h1>
        </StyledProductOverview>
    );
};

export const StyledProductOverview = styled.section`
    background: linear-gradient(to top, rgba(80, 69, 18, 0.6) 10%, transparent),
        url(${backgroundImage}) 50% 45% / cover fixed, #ff1b68;
    /* background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 25%; */
    height: 40vh;
    width: 100vw;
    padding: 0.8rem;
    margin-top: 2rem;
    position: relative;

    .title {
        font-family: 'Anton', sans-serif;
        color: white;
        position: absolute;
        left: 5%;
        bottom: 5%;
    }
`;
