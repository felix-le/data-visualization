import { createBrowserHistory } from 'history';

// Need a module for a single history object for React and Redux
const history = createBrowserHistory({ window });

export default history;
