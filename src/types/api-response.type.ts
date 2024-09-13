import { AxiosHeaders } from 'axios';

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
  status: number;
  headers: AxiosHeaders;
  body: {
    message: string;
    code?: string;
    error?: any;
    errors?: {
      field: string;
      code: string;
      message: string;
    }[];
  };
}
