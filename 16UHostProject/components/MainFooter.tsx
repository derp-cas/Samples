import React from 'react';
import styled from 'styled-components';

export const MainFooter = () => {
    return (
        <StyledMainFooter>
            <nav>
                <ul className='main-footer__links'>
                    <li className='main-footer__link'>
                        <a href='#'>Support</a>
                    </li>
                    <li className='main-footer__link'>
                        <a href='#'>Terms of Use</a>
                    </li>
                </ul>
            </nav>
        </StyledMainFooter>
    );
};

export const StyledMainFooter = styled.footer`
    background: black;
    padding: 3rem;
    margin-top: 4rem;

    .main-footer__links {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .main-footer__link {
        display: inline-block;
        margin: 0 1rem;
    }

    .main-footer__link a {
        color: white;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
    }

    .main-footer__link a:hover,
    .main-footer__link a:active {
        color: #ccc;
    }
`;
