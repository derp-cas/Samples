import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import { QuestionsProps } from './types';
function App() {
    const [questions, setQuestions] = useState<QuestionsProps[]>(data);
    return (
        <main>
            <div className='container'>
                <h3>question and answers about login</h3>
                <section className='info'>
                    {questions.map((question) => {
                        const { id } = question;
                        return <SingleQuestion key={id} {...question} />;
                    })}
                </section>
            </div>
        </main>
    );
}

export default App;
