import { QueryClientProvider } from 'react-query';

import { queryClient } from '@services';
import { PropsWithRequiredChildren } from '@common/types';

import { AppThemeProvider } from './theme';

const AppProviders = ({ children }: PropsWithRequiredChildren) => (
  <QueryClientProvider client={queryClient}>
    <AppThemeProvider>{children}</AppThemeProvider>
  </QueryClientProvider>
);

export default AppProviders;
