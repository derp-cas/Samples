export interface ListProps {
    id: string;
    title: string;
}

export interface ItemListProps {
    items: ListProps[];
    removeItem: (id: string) => void;
    editItem: (id: string) => void;
}

export interface AlertProps {
    show: boolean;
    msg: string;
    type: 'success' | 'danger';
}

export interface AlertFunctionProps {
    removeAlert: (
        show: boolean,
        type: 'success' | 'danger',
        msg: string
    ) => void;
}
