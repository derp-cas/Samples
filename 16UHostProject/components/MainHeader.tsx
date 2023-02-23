import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoIcon from '../photos/uhost-icon.png';

export const MainHeader = () => {
    return (
        <StyledMainHeader className='main-header'>
            <div>
                <Link to='/' className='main-header__brand'>
                    <img
                        src={LogoIcon}
                        alt='Ur Mum'
                        className='main-header__logo'
                    />
                </Link>
            </div>
            <nav className='main-nav'>
                <ul className='main-nav__items'>
                    <li className='main-nav__item'>
                        <Link to='/packages'>Packages</Link>
                    </li>
                    <li className='main-nav__item'>
                        <Link to='/customers'>Customers</Link>
                    </li>
                    <li className='main-nav__item main-nav__item--cta'>
                        <a href='start-hosting/asdf'>Start Hosting</a>
                    </li>
                </ul>
            </nav>
        </StyledMainHeader>
    );
};

export const StyledMainHeader = styled.header`
    position: fixed;
    background: #2ddf5c;
    width: 100%;
    padding: 0.5em 1rem;
    z-index: 1;
    top: 0;

    div {
        display: inline-block;
        text-align: right;
        vertical-align: middle;
    }

    .main-header__brand {
        color: #0e4f1f;
        text-decoration: none;
        font-weight: bold;
        font-size: 22px;
        height: 40px;
        display: inline-block;
    }

    .main-header__logo {
        height: 100%;
    }

    .main-nav {
        display: inline-block;
        text-align: right;
        width: calc(100% - 70px);
        vertical-align: middle;
    }

    .main-nav__items {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .main-nav__item {
        display: inline-block;
        margin: 0 0.5rem;
        font-weight: 700;
    }

    .main-nav__item a {
        color: #0e4f1f;
        text-decoration: none;
        padding: 3px 0;
    }

    .main-nav__item a:hover,
    .main-nav__item a:active {
        color: white;
        border-bottom: 5px solid white;
    }

    .main-nav__item--cta a {
        color: white;
        background: #ff1b68;
        padding: 8px 16px;
        border-radius: 8px;
    }

    .main-nav__item--cta a:hover,
    .main-nav__item--cta a:active {
        color: #ff1b68;
        background: white;
        border: none;
    }
`;
