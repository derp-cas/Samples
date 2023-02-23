import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { JobsProps } from './types';

const url = 'https://course-api.com/react-tabs-project';
function App() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState<JobsProps[]>([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if (loading) {
        return (
            <section className='section loading'>
                <h1>loading...</h1>
            </section>
        );
    }

    const { company, dates, duties, title } = jobs[value];

    return (
        <section className='section'>
            <div className='title'>
                <h2>Experience</h2>
                <div className='underline'></div>
            </div>
            <div className='jobs-center'>
                {/* button container */}
                <div className='btn-container'>
                    {jobs.map((item, i) => {
                        return (
                            <button
                                className={`job-btn ${
                                    i === value && 'active-btn'
                                }`}
                                key={item.id}
                                onClick={() => setValue(i)}
                            >
                                {item.company}
                            </button>
                        );
                    })}
                </div>
                {/* job info */}
                <article className='job-info'>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className='job-date'>{dates}</p>
                    {duties.map((duty, i) => {
                        return (
                            <div key={i} className='job-desc'>
                                <FaAngleDoubleRight></FaAngleDoubleRight>
                                <p>{duty}</p>
                            </div>
                        );
                    })}
                </article>
            </div>
        </section>
    );
}

export default App;
