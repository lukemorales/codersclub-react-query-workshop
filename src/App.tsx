import { Router } from 'react-router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useTheme } from 'styled-components';
import { SkeletonTheme } from 'react-loading-skeleton';

import { history } from '@services';
import { DefaultLayout } from '@pages/_layouts';

import Routes from './routes';

const App = () => {
  const theme = useTheme();

  return (
    <Router history={history}>
      <SkeletonTheme color="#fff5f8" highlightColor={theme.colors.accent.soft}>
        <DefaultLayout>
          <Routes />
          <ReactQueryDevtools initialIsOpen />
        </DefaultLayout>
      </SkeletonTheme>
    </Router>
  );
};

export default App;
