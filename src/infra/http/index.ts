import { AxiosHttpClientAdapter } from './axios-http-adapter';
import type { HttpClient } from './types';

export const httpClient: HttpClient = AxiosHttpClientAdapter;
