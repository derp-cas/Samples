import { ReactNode } from 'react';

export interface ChildrenProps {
    children?: ReactNode;
}

export interface CocktailsProps {
    id?: string;
    name: string;
    image: string;
    info: string;
    glass: string;
    category?: string;
    instructions?: string;
    ingredients?: string[];
}

export interface DrinksProps {
    drinks: [
        {
            idDrink: string;
            strDrink: string;
            strDrinkThumb: string;
            strAlcoholic: string;
            strGlass: string;
        }
    ];
}
