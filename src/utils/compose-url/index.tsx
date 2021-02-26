import { BASE_URL } from '@constants';

const sanitizeEndpoint = (endpoint: string) => endpoint.replace(/^\/|\/$/g, '');

export const composeUrl = (endpoint: string) =>
  `${BASE_URL}/${sanitizeEndpoint(endpoint)}`;
