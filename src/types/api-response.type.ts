export interface ApiResponseAll<T> {
  message: string;
  data: T[];
  meta: {
    currentPage: number;
    totalPage: number;
    totalData: number;
    totalAllData: number;
  };
}
