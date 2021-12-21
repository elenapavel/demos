import { base, PUBLIC_URL } from '~/constants/flamingo';

import home from './home';

export const socialMedia = [
	{
		link: 'https://facebook.com',
		icon: 'fab fa-facebook',
	},
	{
		link: 'https://twitter.com',
		icon: 'fab fa-twitter',
	},
	{
		link: 'https://instagram.com',
		icon: 'fab fa-instagram',
	},
	{
		link: 'https://youtube.com',
		icon: 'fab fa-youtube',
	},
];

export const inquiry = {
	image: PUBLIC_URL + '/background-footer.jpg',
	socialMedia,
	heading: 'Have any project in mind?',
	action: {
		text: 'make inquiry',
	},
};

export const pages = {
	home,
};

export default {
	logo: {
		image: `${PUBLIC_URL}/logo.png`,
		route: base,
	},
	menu: [
		{
			name: 'home',
			route: base,
		},
		{
			name: 'services',
			route: `${base}services/`,
		},
		{
			name: 'works',
			route: `${base}works/`,
		},
		{
			name: 'about',
			route: `${base}about/`,
		},
		{
			name: 'blog',
			route: `${base}blog/`,
		},
		{
			name: 'contact us',
			route: `${base}contact-us/`,
			isButton: true,
		},
	],
	footer: {
		inquiry,
		columns: [
			{
				logo: {
					image: `${PUBLIC_URL}/logo.png`,
					route: base,
				},
				description: 'We are more than a digital agency',
			},
			{
				menuName: 'Contact Us',
				items: [
					{
						link: 'tel:0727729068',
						text: '0727729068',
						icon: 'fas fa-phone-volume',
					},
					{
						link: 'mailto:mocanu.alexandru20@yahoo.ro',
						text: 'mocanu.alexandru20@yahoo.ro',
						icon: 'far fa-envelope',
					},
					{
						text: 'Constantza, Romania',
						icon: 'fas fa-map-marker-alt',
					},
					{
						text: 'Monday to Friday',
						icon: 'far fa-calendar-alt',
					},
				],
			},
			{
				menuName: 'Our Services',
				items: [
					{
						route: base,
						text: 'Link nb.1',
					},
					{
						route: base,
						text: 'Link nb.2',
					},
					{
						route: base,
						text: 'Link nb.3',
					},
					{
						route: base,
						text: 'Link nb.4',
					},
				],
			},
			{
				menuName: 'About Us',
				items: [
					{
						route: base + 'about',
						text: 'About',
					},
					{
						route: base + 'blog',
						text: 'Blog',
					},
					{
						route: base + 'works',
						text: 'Works',
					},
					{
						route: base + 'contact-us',
						text: 'Contact us',
					},
				],
			},
		],
		copyright: {
			text: 'Copyright 2020 All rights reserved',
			privacy: {
				route: base + 'privacy',
				text: 'Privacy Policy',
			},
			privacy: {
				route: base + 'terms',
				text: 'Terms of Use',
			},
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
			socialMedia,
		},
	},
};
