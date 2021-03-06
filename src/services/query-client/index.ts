import { QueryClient } from 'react-query';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { createLocalStoragePersistor } from 'react-query/createLocalStoragePersistor-experimental';

const localStoragePersistor = createLocalStoragePersistor();

export const queryClient = new QueryClient();

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});
