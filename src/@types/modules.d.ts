declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_BASE_URL: string;
    REACT_APP_MSW_ENABLED: 'true' | 'false';
  }
}
