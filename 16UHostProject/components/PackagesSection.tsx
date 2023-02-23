import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

export const PackagesSection = () => {
    return (
        <StyledPackages>
            <section>
                <a href='#' className='package' id='plus'>
                    <h1 className='package__title'>Our PLUS Plan</h1>
                    <h2 className='package__badge'>RECOMMENDED</h2>
                    <h2 className='package__subtitle'>
                        The most popular choice of our customers.
                    </h2>
                    <p className='package__description'>
                        Benefit from increased storage and faster support to
                        ensure that your mission-critical data and applications
                        are always available!
                    </p>
                </a>
            </section>
            <section>
                <a href='#' className='package' id='free'>
                    <h1 className='package__title'>Our FREE Plan</h1>
                    <h2 className='package__subtitle'>
                        An extremely solid start into our hosting world.
                    </h2>
                    <p className='package__description'>
                        Get started immediately at zero cost!
                    </p>
                </a>
            </section>
            <section>
                <a href='#' className='package' id='premium'>
                    <h1 className='package__title'>Our PREMIUM Plan</h1>
                    <h2 className='package__subtitle'>
                        All your enterprise needs. Instant support, guaranteed
                        uptime.{' '}
                    </h2>
                    <p className='package__description'>
                        The best solution for small to large enterprises.
                        Because hosting shouldn't be in the way!
                    </p>
                </a>
            </section>
        </StyledPackages>
    );
};

export const StyledPackages = styled.main`
    padding: 2rem 0;
    margin-top: 3rem;

    .package {
        margin: 1rem 0;
        border: 4px solid #0e4f1f;
        display: inline-block;
        width: 900px;
        padding: 1rem;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        position: relative;
    }

    .package:hover,
    .package:active {
        border-color: red;
        box-shadow: 0 5px 15px #0e4f1f;
        .package__badge {
            color: #0e4f1f;
        }
    }

    .package__title {
        color: black;
    }

    .package__badge {
        position: absolute;
        top: 0;
        right: 0;
        margin: 1.2rem;
        color: white;
        transition: all 0.2s ease-in-out;
        font-size: 0.9rem;
        background-color: #ff5454;
        padding: 1rem;
    }

    .package__subtitle {
        color: #979797;
    }

    .package__description {
        background-color: white;
        color: #0e4f1f;
        padding: 1rem;
        border: 2px solid #0e4f1f;
        font-size: 1.2rem;
    }

    #plus {
        background-color: rgba(213, 255, 220, 0.95);
    }

    #free {
        background-color: rgba(234, 252, 237, 0.95);
    }

    #premium {
        background-color: rgba(14, 79, 31, 0.95);
    }

    #premium .package__title {
        color: white;
    }

    #premium .package__subtitle {
        color: #bbb;
    }
`;
