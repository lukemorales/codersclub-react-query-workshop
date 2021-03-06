import { PropsWithRequiredChildren } from '@common/types';

import { AppThemeProvider } from './theme';

const AppProviders = ({ children }: PropsWithRequiredChildren) => (
  <AppThemeProvider>{children}</AppThemeProvider>
);

export default AppProviders;
