import { createApi } from '@reduxjs/toolkit/query';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: () => ({}),
});