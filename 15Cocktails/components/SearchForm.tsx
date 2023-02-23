import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    //adding use ref because input should be uncontrolled
    const searchValue = useRef<HTMLInputElement>(null);

    const searchCocktail = () => {
        setSearchTerm(searchValue.current!.value);
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    useEffect(() => {
        //set focus on app render
        searchValue.current!.focus();
    }, []);

    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>search your favorite cocktail</label>
                    <input
                        type='text'
                        id='name'
                        ref={searchValue}
                        onChange={searchCocktail}
                    />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
