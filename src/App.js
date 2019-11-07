import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import List from './components/List/withData';
import Error from './components/Error'
import CssBaseline from '@material-ui/core/CssBaseline';

const loggingMiddleware = store => next => action => {
	next(action);
};

const store = createStore(
  reducer,
	compose(
		applyMiddleware(thunk, loggingMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

window.__USE_DEVTOOLS__ = true;

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/starwars" component={List}/>
				<Route component={Error}/>
			</Switch>
		</BrowserRouter>
	);
};

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<CssBaseline />
			<App />
		</Provider>
	);
};

export default AppWrapper;