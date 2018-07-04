export interface IPage {
    "id": string;
    "button_reg": boolean;
    "column": IColumn[];
    "message": any[];
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