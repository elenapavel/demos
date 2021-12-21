import React from 'react';

import $ from './style.scss';

const Column = ({
	icon = null,
	heading = null,
	description = null,
	classes = '',
	hasSeparator = false,
	hover = null,
	type = null,
}) => (
	<b
		className={`${classes} ${
			hover === 'border'
				? $.hover_b
				: hover === 'background'
				? $.hover_bg
				: ''
		}`}
	>
		{icon && <i className={`${icon} icon-green mb-default`}></i>}
		{heading && <h3 className="mb-default">{heading}</h3>}
		{hasSeparator && <b className="separator" />}
		{description && <p>{description}</p>}
	</b>
);

export default Column;
