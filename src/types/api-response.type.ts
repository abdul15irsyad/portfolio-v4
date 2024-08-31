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

export interface ApiResponse<T> {
  message: string;
  data: T;
}

export interface ApiResponseError {
  message: string;
  error: any;
}
