export interface IPagination {
  onPageCountMessage: number;
  countMessage: number;
  navPagination: INavPagination[];  
};

export interface INavPagination{
  Name: string;
  Id: number;
}