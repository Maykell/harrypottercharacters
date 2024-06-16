import axios, { AxiosError } from 'axios';
import type { HttpClient, HttpRequest, HttpResponse } from '../types';

const _axios = axios.create({
  headers: {
    accept: 'application/json',
  },
});

export const AxiosHttpClientAdapter: HttpClient = {
  request: async function <R, L>(
    request: HttpRequest,
  ): Promise<HttpResponse<R, L>> {
    try {
      const response = await _axios.request<R>({
        url: request.url,
        method: request.method ?? 'get',
        data: request.data,
        headers: request.headers ?? undefined,
        baseURL: 'https://api.potterdb.com/',
      });

      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      const { response, status } = error as AxiosError<L>;

      return {
        error: response?.data,
        status: response?.status ?? status,
      };
    }
  },
};
