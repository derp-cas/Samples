export interface PeopleProps {
    id: number;
    image: string;
    name: string;
    title: string;
    quote: string;
}

export interface ReviewProps {
    people: PeopleProps[];
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}
