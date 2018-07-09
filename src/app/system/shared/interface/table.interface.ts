export interface ITable {
    "id": string;
    "button_reg": boolean;
    "column": IColumn[];
    "message": any[];
};

interface IColumn{
    "id": string;
    "name": string;
    "new_name": string;
    "show": boolean;
    "width": number;
    "new_width": number;
    "sort": ISort;
}

class ISort{
    "active": boolean;
    "ordrer_by": string;
}