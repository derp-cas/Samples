export interface ColorsProps {
    alpha: number;
    rgb: (number | number | number)[];
    type: string;
    weight: number;
    hex: string;
}

export interface SingleColorProps extends ColorsProps {
    index: number;
    key: number;
    hexColor: string;
}
