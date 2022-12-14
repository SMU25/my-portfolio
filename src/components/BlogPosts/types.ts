export enum ViewVariants {
  COLUMN = "COLUMN",
  ROW = "ROW",
}

export interface IBlogItem {
  title: string;
  message: string;
  category: string;
  dateCreated: Date;
}
