import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HelloWorld from './HelloWorld';
import TestingMoreOnAbout from './TestingMoreOnAbout';

const isProduction = process.env.NODE_ENV === 'production';
// const base = isProduction ? '/demos/' : '/';

import $ from './style.css';

import './defaults.css';

const Home = () => (
	<>
		<main className={$.main}>
			<h2>Welcome to the homepage!</h2>
			<p>You can do this, I believe in you.</p>
		</main>
		<nav>
			<Link to="/about">About</Link>
		</nav>
	</>
);

const App = () => (
	<React.StrictMode>
		<BrowserRouter>
			<HelloWorld />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<TestingMoreOnAbout />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

const render = Component =>
	ReactDOM.render(<Component />, document.getElementById('root'));

render(hot(App));
