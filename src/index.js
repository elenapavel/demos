import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HelloWorld from './HelloWorld';
import TestingMoreOnAbout from './TestingMoreOnAbout';

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
	<BrowserRouter>
		<HelloWorld />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<TestingMoreOnAbout />} />
		</Routes>
	</BrowserRouter>
);

const render = Component =>
	ReactDOM.render(<Component />, document.getElementById('root'));

render(hot(App));
