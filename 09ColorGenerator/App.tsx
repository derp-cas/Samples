import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';
import { ColorsProps } from './types';

function App() {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState<ColorsProps[]>(
        new Values('#123123').all(10)
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            // console.log(colors);
            setError(false);
            setList(colors);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    return (
        <>
            <section className='container'>
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={color}
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                        placeholder='#123123'
                        className={`${error ? 'error' : null}`}
                    />
                    <button className='btn' type='submit'>
                        submit
                    </button>
                </form>
            </section>
            <section className='colors'>
                {list.map((color, i) => {
                    return (
                        // accessing hex from color.hex because destructuring in SingleColor wont work properly
                        <SingleColor
                            key={i}
                            {...color}
                            hexColor={color.hex}
                            index={i}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default App;
