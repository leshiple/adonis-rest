export interface IUIPagination {
  page: number,
  rowsPerPage: number,
  sortBy: string,
  descending: boolean,
}

export interface IPagination {
  rowsNumber: number
  rowsPerPage: number
  page: number
  lastPage: number
  firstPage: number
  firstPageUrl: number
  lastPageUrl: number
  nextPageUrl: string
  previousPageUrl: string
}
