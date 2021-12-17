import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HelloWorld from './HelloWorld';

import $ from './style.css';

render(
	<BrowserRouter>
		<HelloWorld />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<About />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);

function Home() {
	return (
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
}

function About() {
	return (
		<>
			<main>
				<h2>Who are we?</h2>
				<p>That feels like an existential question, don't you think?</p>
			</main>
			<nav>
				<Link to="/">Home</Link>
			</nav>
		</>
	);
}
