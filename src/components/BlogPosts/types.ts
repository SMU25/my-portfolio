export enum ViewVariants {
  COLUMN = "COLUMN",
  ROW = "ROW",
}

export interface IBlogItem {
  id: string;
  title: string;
  message: string;
  category: string;
  createdAt: Date;
}
