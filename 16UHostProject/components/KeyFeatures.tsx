import React from 'react';
import styled from 'styled-components';

// import svg1 from '../SVGs/svg1.jsx';
// import svg2 from '../SVGs/svg2.html';
// import svg3 from '../SVGs/svg3.html';

export const KeyFeatures = () => {
    return (
        <StyledKeyFeatures>
            <h1 className='section-title'>Many Good Reasons to Stick Around</h1>
            <ul className='key-feature__list'>
                <li className='key-feature'>
                    <div className='key-feature__image'></div>
                    <p className='key-feature__description'>
                        3,857,000 Trusting Customers
                    </p>
                </li>
                <li className='key-feature'>
                    <div className='key-feature__image'></div>
                    <p className='key-feature__description'>
                        99.999% Uptime Guarantee
                    </p>
                </li>
                <li className='key-feature'>
                    <div className='key-feature__image'></div>
                    <p className='key-feature__description'>
                        Lightning Fast CDN
                    </p>
                </li>
            </ul>
        </StyledKeyFeatures>
    );
};

export const StyledKeyFeatures = styled.section`
    background: #ff1b68;
    margin-top: 5rem;

    .section-title {
        color: white;
        margin: 2rem;
        padding: 1rem;
    }

    .key-feature__list {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .key-feature {
        vertical-align: top;
        display: inline-block;
        width: 33%;
    }

    .key-feature__image {
        background: #ffcede;
        width: 128px;
        height: 128px;
        border: 2px solid #424242;
        border-radius: 50%;
        margin: auto;
    }

    .key-feature__description {
        text-align: center;
        font-weight: bold;
        color: white;
    }
`;
