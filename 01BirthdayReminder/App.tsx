import React, { useState } from 'react';
import data from './data';
import List from './List';

function App(): JSX.Element {
    const [people, setPeople] = useState(data);
    return (
        <main>
            <section className='container'>
                <h3>{people.length} Birthdays today</h3>
                <List allPeople={people} />
                <button onClick={() => setPeople([])} className='btn'>
                    clear all
                </button>
            </section>
        </main>
    );
}

export default App;
