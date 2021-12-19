import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';

import HelloWorld from './HelloWorld';
import TestingMoreOnAbout from './TestingMoreOnAbout';

import { base, PUBLIC_URL } from '~/constants';

import $ from './style.css';

import './defaults.css';

const Home = () => (
	<>
		<main className={$.main}>
			<h2>Welcome to the homepage!</h2>
			<p>You can do this, I believe in you.</p>
		</main>
		<nav>
			<Link to={`${PUBLIC_URL}/about`}>About</Link>
		</nav>
	</>
);

// const routes = [
// 	{
// 		path: base,
// 		exact: true,
// 		element: <Home />,
// 	},
// 	{
// 		path: `${base}about`,
// 		exect: true,
// 		element: <TestingMoreOnAbout />,
// 	},
// ];

// const Routes = () => useRoutes(routes);

const App = () => {
	console.log(PUBLIC_URL);
	return (
		<React.StrictMode>
			<BrowserRouter>
				<HelloWorld />
				{/*<Routes />*/}
				<Routes>
					<Route path={PUBLIC_URL} exact element={<Home />} />
					<Route
						path={`${PUBLIC_URL}/about`}
						exact
						element={<TestingMoreOnAbout />}
					/>
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
};

const render = Component =>
	ReactDOM.render(<Component />, document.getElementById('root'));

render(hot(App));
