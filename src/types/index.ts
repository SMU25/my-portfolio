export enum ListTypeView {
  COLUMN = "column",
  ROW = "row",
}

export interface QueryParams {
  page?: number;
  limit?: number;
  offset?: number;
}
