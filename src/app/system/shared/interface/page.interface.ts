export interface IPage {
    "id": string;
    "button-reg": boolean;
    "column": IColumn[];
};

interface IColumn{
    "id": string;
    "name": string;
    "show": boolean;
    "width": number;
    "sort": ISort;
}

class ISort{
    "active": boolean;
    "ordrer_by": string;
}