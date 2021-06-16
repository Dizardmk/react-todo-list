import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);

const TodoPage = lazy(() =>
  import('./pages/TodoPage' /* webpackChunkName: "todo-page" */),
);

export default function App() {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={'Loading'}>
          <Switch>
            <Route exact path={routes.home}>
              <HomePage />
            </Route>
            <Route path={routes.todo}>
              <TodoPage />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </>
  );
}
