export interface SingleTourProps {
    removeTour: (id: string) => void;
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
}

export interface MultipleToursProps {
    removeTour: (id: string) => void;
    tours: SingleTourProps[];
}
