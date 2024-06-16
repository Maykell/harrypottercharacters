export enum HttpStatusCode {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ServerError = 500,
}

export type HttpHeader = Record<string, string>;

export type HttpRequest = {
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  data?: unknown;
  headers?: HttpHeader;
};

export type HttpResponse<R, L> = {
  data?: R;
  error?: L;
  status: HttpStatusCode | undefined;
};

export interface HttpClient {
  request: <R, L>(request: HttpRequest) => Promise<HttpResponse<R, L>>;
}
