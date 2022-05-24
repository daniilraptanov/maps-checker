export interface SendQueryType {
    data: any,
    message: string,
    code: number
}

export type statusCode = (201 | 200 | 500 | 204 | 400 | 401);

export interface StatusCodes {
    201: string,
    200: string,
    500: string,
    204: string,
    400: string,
    401: string,
  };