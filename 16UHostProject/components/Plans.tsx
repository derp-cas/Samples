import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

export const Plans = () => {
    const { setShowModal } = useGlobalContext();

    return (
        <StyledPlans>
            <h1 className='section-title'>Choose your plan!</h1>
            <div className='plan__list'>
                <article className='plan'>
                    <h1 className='plan__title'>FREE</h1>
                    <h2 className='plan__price'>$0/month</h2>
                    <h3>For hobby projects or small teams.</h3>
                    <ul className='plan__features'>
                        <li className='plan__feature'>1 Workspace</li>
                        <li className='plan__feature'>Unlimited Traffic</li>
                        <li className='plan__feature'>10GB Storage</li>
                        <li className='plan__feature'>Basic Support</li>
                    </ul>
                    <div>
                        <button
                            className='button'
                            onClick={() => setShowModal(true)}
                        >
                            CHOOSE PLAN
                        </button>
                    </div>
                </article>
                <article className='plan plan--highlighted'>
                    <h1 className='plan__annotation'>RECOMMENDED</h1>
                    <h1 className='plan__title'>PLUS</h1>
                    <h2 className='plan__price'>$29/month</h2>
                    <h3>For ambitious projects.</h3>
                    <ul className='plan__features'>
                        <li className='plan__feature'>5 Workspaces</li>
                        <li className='plan__feature'>Unlimited Traffic</li>
                        <li className='plan__feature'>100GB Storage</li>
                        <li className='plan__feature'>Plus Support</li>
                    </ul>
                    <div>
                        <button
                            className='button'
                            onClick={() => setShowModal(true)}
                        >
                            CHOOSE PLAN
                        </button>
                    </div>
                </article>
                <article className='plan'>
                    <h1 className='plan__title'>PREMIUM</h1>
                    <h2 className='plan__price'>$99/month</h2>
                    <h3>Your enterprise solution.</h3>
                    <ul className='plan__features'>
                        <li className='plan__feature'>10 Workspaces</li>
                        <li className='plan__feature'>Unlimited Traffic</li>
                        <li className='plan__feature'>Unlimited Storage</li>
                        <li className='plan__feature'>Priority Support</li>
                    </ul>
                    <div>
                        <button
                            className='button'
                            onClick={() => setShowModal(true)}
                        >
                            CHOOSE PLAN
                        </button>
                    </div>
                </article>
            </div>
        </StyledPlans>
    );
};

export const StyledPlans = styled.section`
    .plan__list {
        width: 80%;
        margin: auto;
        text-align: center;
    }

    .plan {
        background: #d5ffdc;
        text-align: center;
        padding: 1rem;
        margin: 0.5rem;
        display: inline-block;
        width: 30%;
        vertical-align: middle;
        border-radius: 4px;
    }

    .plan--highlighted {
        background: #19b84c;
        color: white;
        box-shadow: 0 5px 15px #0e4f1f;
    }

    .plan__annotation {
        background: white;
        color: #19b84c;
        padding: 8px;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
        border-radius: 4px;
    }

    .plan__title {
        color: #0e4f1f;
    }

    .plan__price {
        color: #858585;
    }

    .plan__highlighted .plan__title {
        color: white;
    }

    .plan--highlighted .plan__price {
        color: #0e4f1f;
    }

    .plan__features {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .plan__feature {
        margin: 8px;
        /* import different weights  */
        font-weight: 100;
    }
`;
