import { Router } from 'react-router';

import { history } from '@services';
import { DefaultLayout } from '@pages/_layouts';

import Routes from './routes';

const App = () => (
  <Router history={history}>
    <DefaultLayout>
      <Routes />
    </DefaultLayout>
  </Router>
);

export default App;
