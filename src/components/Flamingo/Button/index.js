import React from 'react';
import { Link } from 'react-router-dom';

import $ from './style.scss';

const Button = ({
	text = '',
	link = '',
	small = false,
	ghost = false,
	children,
}) => (
	<Link
		to={link}
		className={!ghost ? (small ? $.button_small : $.button) : ''}
	>
		{text || children}
	</Link>
);

export default Button;
