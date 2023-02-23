import { ReactNode } from 'react';

export interface CartProps {
    id: number;
    title: string;
    price: number;
    img: string;
    amount: number;
}

export interface ChildrenProps {
    children?: ReactNode;
}

export interface StateProps {
    loading: boolean;
    cart: {
        id: number;
        title: string;
        price: number;
        img: string;
        amount: number;
    }[];
    total: number;
    amount: number;
}

// export interface DispatchTypeProps {
//     type: string;
//     dispatch: (value: string) => void;
// }

export interface ActionProps {
    type?: string;
    payload?: string | number | Promise<any> | any;
}
