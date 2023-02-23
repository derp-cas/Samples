import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ReviewProps } from './types';

export const Reviews = (props: ReviewProps) => {
    const { people, index, setIndex } = props;
    return (
        <div className='section-center'>
            {people.map((person, i) => {
                const { id, image, name, title, quote } = person;
                let position = 'nextSlide';

                if (i === index) {
                    position = 'activeSlide';
                }
                if (
                    i === index - 1 ||
                    (index === 0 && i === people.length - 1)
                ) {
                    position = 'lastSlide';
                }

                return (
                    <article key={id} className={position}>
                        <img src={image} alt={name} className='person-img' />
                        <h4>{name}</h4>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>
                );
            })}
            <button className='prev' onClick={() => setIndex(index - 1)}>
                <FiChevronLeft />
            </button>
            <button className='next' onClick={() => setIndex(index + 1)}>
                <FiChevronRight />
            </button>
        </div>
    );
};
