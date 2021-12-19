import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, useRoutes, Outlet } from 'react-router-dom';

import HelloWorld from './HelloWorld';
import TestingMoreOnAbout from './TestingMoreOnAbout';

import { base } from '~/constants';

import $ from './style.css';

import './defaults.css';

const Home = () => (
	<>
		<main className={$.main}>
			<h2>Welcome to the homepage!</h2>
			<p>You can do this, I believe in you.</p>
		</main>
		<nav>
			<Link to={`${base}about`}>About</Link>
		</nav>
	</>
);

const routes = [
	{
		path: base,
		element: <Home />,
	},
	{
		path: `${base}about`,
		element: <TestingMoreOnAbout />,
	},
];

const Routes = () => useRoutes(routes);

const App = () => {
	console.log(base);
	return (
		<React.StrictMode>
			<BrowserRouter>
				<HelloWorld />
				<Routes />
			</BrowserRouter>
		</React.StrictMode>
	);
};

const render = Component =>
	ReactDOM.render(<Component />, document.getElementById('root'));

render(hot(App));
