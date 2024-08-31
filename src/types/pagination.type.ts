export interface PaginationParam {
  page?: number;
  limit?: number;
  search?: string;
  orderBy?: string;
  orderDir?: 'asc' | 'desc';
}
