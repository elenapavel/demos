import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

import { Outlet } from 'react-router-dom';

import { base } from '~/constants/flamingo';

import Navigation from '~c/Flamingo/Navigation';
import Footer from '~c/Flamingo/Footer';
import Home from './Home';
import Services from './Services';

import data, { pages } from './db/data';

export const routes = [
	{ index: true, element: <Home {...pages.home} /> },
	{
		path: `services/`,
		element: <Services />,
	},
	{
		path: `works/`,
		element: <Services />,
	},
	{
		path: `about/`,
		element: <Services />,
	},
	{
		path: `blog/`,
		element: <Services />,
	},
	{
		path: `contact-us/`,
		element: <Services />,
	},
];

const Flamingo = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Poppins:400,800', 'Roboto:400'],
			},
		});

		import('./style.scss');
	}, []);

	return (
		<b>
			<Navigation logo={data.logo} menu={data.menu} />
			<Outlet />
			<Footer {...data.footer} />
		</b>
	);
};

export default Flamingo;
