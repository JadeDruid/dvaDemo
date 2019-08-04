import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import TodoList from './routes/TodoList';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/todoList" exact component={TodoList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
