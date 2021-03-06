import { QueryClientProvider } from 'react-query';

import { PropsWithRequiredChildren } from '@common/types';
import { queryClient } from '@services';

import { AppThemeProvider } from './theme';

const AppProviders = ({ children }: PropsWithRequiredChildren) => (
  <QueryClientProvider client={queryClient}>
    <AppThemeProvider>{children}</AppThemeProvider>
  </QueryClientProvider>
);

export default AppProviders;
