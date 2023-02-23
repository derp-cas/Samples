import React from 'react';
import styled from 'styled-components';
import { Backdrop } from '../../components/Backdrop';
import { MainFooter } from '../../components/MainFooter';
import { MainHeader } from '../../components/MainHeader';
import Customer1Pic from '../../photos/customer-1.jpg';
import Customer2Pic from '../../photos/customer-2.jpg';

export const CustomersPage = () => {
    return (
        <>
            <Backdrop />
            <MainHeader />
            <StyledCustomersPage>
                <div className='testimonial' id='customer-1'>
                    <div className='testimonial__image-container'>
                        <img
                            src={Customer1Pic}
                            alt='Mike Statham - Customer'
                            className='testimonial__image'
                        />
                    </div>
                    <div className='testimonial__info'>
                        <h1 className='testimonial__name'>Mike Statham</h1>
                        <h2 className='testimonial__subtitle'>
                            Founder of
                            <a href='tech-analysis.com'>tech-analysis.com</a>
                        </h2>
                        <p className='testimonial__text'>
                            uHost helped me realize my project with a highly
                            constrained budget in like no time.
                        </p>
                    </div>
                </div>
                <div className='testimonial' id='customer-2'>
                    <div className='testimonial__info'>
                        <h1 className='testimonial__name'>John Mellow</h1>
                        <h2 className='testimonial__subtitle'>
                            Hosts his private videos on uHost.
                        </h2>
                        <p className='testimonial__text'>
                            I worked as a blogger and always looked for an
                            integrated hosting and file storage solution. I
                            found it in uHost!
                        </p>
                    </div>
                    <div className='testimonial__image-container'>
                        <img
                            src={Customer2Pic}
                            alt='John Mellow - Customer'
                            className='testimonial__image'
                        />
                    </div>
                </div>
            </StyledCustomersPage>
            <MainFooter />
        </>
    );
};

export const StyledCustomersPage = styled.div`
    .testimonial {
        font-size: 1.2rem;
        margin: 3rem 0;
    }

    .testimonial__list {
        width: 80%;
        margin: auto;
    }

    .testimonial:first-of-type {
        margin-top: 6rem;
    }

    .testimonial__image-container {
        width: 65%;
        max-width: 1080px;
        /* min-width: 350px; */
        //add display inline block to make the image respect the height and width of the container
        display: inline-block;
        vertical-align: middle;
        box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.4);
    }

    .testimonial__image {
        width: 100%;
        // get rid of whitespace
        vertical-align: top;
    }

    .testimonial__info {
        text-align: right;
        padding: 0.9rem;
        display: inline-block;
        vertical-align: middle;
        width: 30%;
    }

    #customer-2.testimonial {
        text-align: right;
    }

    #customer-2 .testimonial__info {
        text-align: left;
    }

    .testimonial__name {
        margin: 0.2rem;
        color: #ff5454;
        font-size: 2rem;
    }

    .testimonial__subtitle {
        margin: 0;
        font-size: 1.1rem;
        color: #ccc;
    }

    .testimonial__subtitle a {
        color: inherit;
        text-decoration: none;
    }

    .testimonial__subtitle a:hover,
    .testimonial__subtitle a:active {
        color: #7a7a7a;
    }

    .testimonial__text {
        margin: 0.2rem;
    }
`;
