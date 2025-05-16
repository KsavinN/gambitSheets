export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface ErrorResponse {
  error: string;
  status: number;
  message: string;
}

export const createApiResponse = <T>(data: T, message: string = 'Success'): ApiResponse<T> => ({
  data,
  status: 200,
  message
});

export const createErrorResponse = (error: string, status: number = 500): ErrorResponse => ({
  error,
  status,
  message: error
});
