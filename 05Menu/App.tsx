import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import { MenuItemsProps } from './types';

// use Set to get unique Categories values
const uniqueCategories = new Set(items.map((item) => item.category));

//use Array.from to to spread unique categories, because uniqueCategories has type Set<string> and can only be
//iterated through when using "--downlevelIteration" flag or with a "--target""
const allCategories = ['all', ...Array.from(uniqueCategories)];

function App() {
    const [menuItems, setMenuItems] = useState<MenuItemsProps[]>(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category: string) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>our menu</h2>
                    <div className='underline'></div>
                </div>
                <Categories filterItems={filterItems} categories={categories} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
