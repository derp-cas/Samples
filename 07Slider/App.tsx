import React, { useState, useEffect } from 'react';
import data from './data';
import { PeopleProps } from './types';
import { Reviews } from './Reviews';

function App(): JSX.Element {
    const people: PeopleProps[] = data;
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 3000);
        return () => clearInterval(slider);
    }, [index]);

    return (
        <section className='section'>
            <div className='title'>
                <h2>
                    <span>/</span>Reviews
                </h2>
            </div>
            <Reviews people={people} index={index} setIndex={setIndex} />;
        </section>
    );
}

export default App;
