import React from 'react';
import Tour from './Tour';
import { MultipleToursProps } from './types';

const Tours = (props: MultipleToursProps) => {
    const { tours, removeTour } = props;
    // const { removeTour } = functions;

    return (
        <section>
            <div className='title'>
                <h2>our tours</h2>
                <div className='underline'></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return (
                        <Tour key={tour.id} {...tour} removeTour={removeTour} />
                    );
                })}
            </div>
        </section>
    );
};

export default Tours;
