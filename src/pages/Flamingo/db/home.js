import { base, PUBLIC_URL } from '~/constants/flamingo';

export default {
	header: {
		image: `${PUBLIC_URL}/home.jpeg`,
		heading: 'We are digital agency.',
		description: 'CREATIVE MIND, CREATIVE WORKS.',
		action: {
			text: 'getting started',
		},
		columns: [
			{
				icon: 'fas fa-paper-plane',
				heading: 'Future Concept.',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
			},
			{
				icon: 'fas fa-brain',
				heading: 'The Big Ideas.',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
			},
			{
				icon: 'fas fa-lightbulb',
				heading: 'Creative Solutions.',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
			},
		],
	},
	sections: [
		{
			heading: 'Services.',
			description: 'our services for clients',
			isContainer: true,
			hasDefaultColumns: true,
			columns: [
				{
					icon: 'far fa-chart-bar',
					heading: 'Digital Strategy',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
				},
				{
					icon: 'fas fa-pencil-alt',
					heading: 'UX Designs',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
				},
				{
					icon: 'fas fa-user-friends',
					heading: 'UI Designs',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
				},
				{
					icon: 'fas fa-globe',
					heading: 'Social Media',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
				},
				{
					icon: 'far fa-bookmark',
					heading: 'Design Concept',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
				},
				{
					icon: 'fas fa-chart-area',
					heading: 'Media Pairing',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
				},
			],
		},
		{
			heading: 'Works.',
			description: "things we've made",
			action: {
				text: 'view all',
			},
			columnsType: 'works',
			columns: [
				{
					icon: 'far fa-chart-bar',
					heading: 'Digital Strategy',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
				},
				{
					icon: 'fas fa-pencil-alt',
					heading: 'UX Designs',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
				},
				{
					icon: 'fas fa-user-friends',
					heading: 'UI Designs',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
				},
				{
					icon: 'fas fa-globe',
					heading: 'Social Media',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
				},
				{
					icon: 'far fa-bookmark',
					heading: 'Design Concept',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
				},
				{
					icon: 'fas fa-chart-area',
					heading: 'Media Pairing',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.',
				},
			],
		},
	],
};
