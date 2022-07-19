import React from 'react';

import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from './browserHistory';
import Router from './pages/Router';

function App() {
  return (
    <HistoryRouter history={history}>
      <Router />
    </HistoryRouter>
  );
}

export default App;
