type JikanError = {
  status: number;
  type: string;
  message: string;
  error: string;
};

export type ApiError = import('axios').AxiosError<JikanError>;
