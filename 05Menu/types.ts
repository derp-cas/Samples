export interface MenuItemsProps {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
}

export interface MenuItemsArrayProps {
    items: MenuItemsProps[];
}

export interface CategoriesProps {
    filterItems: (categories: string) => void;
    categories: string[];
}

// id: 1,
// title: 'buttermilk pancakes',
// category: 'breakfast',
// price: 15.99,
// img: './images/item-1.jpeg',
// desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
