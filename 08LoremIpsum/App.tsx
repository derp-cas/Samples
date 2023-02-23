import React, { useState } from 'react';
import data from './data';
function App() {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let amount = count;
        if (count <= 0) {
            amount = 1;
            setCount(1);
        }
        if (count > 8) {
            amount = 8;
            setCount(8);
        }
        setText(data.slice(0, amount));
    };

    return (
        <section className='section-center'>
            <h3>tired of boring lorem ipsum?</h3>
            <form className='lorem-form' onSubmit={handleSubmit}>
                <label htmlFor='amount'>paragraphs:</label>
                <input
                    type='number'
                    name='amount'
                    id='amount'
                    value={count}
                    min='0'
                    onChange={(e) => setCount(parseInt(e.target.value))}
                />
                <button className='btn' type='submit'>
                    generate
                </button>
            </form>
            <article className='lorem-text'>
                {text.map((item, i) => {
                    return <p key={i}>{item}</p>;
                })}
            </article>
        </section>
    );
}

export default App;
