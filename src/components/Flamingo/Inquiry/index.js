import React from 'react';
import Button from '~c/Flamingo/Button';

import $ from './style.scss';

const Inquiry = ({
	socialMedia = [],
	heading = '',
	image = '',
	action = {},
}) => (
	<div
		className="section text-center bg-cover bg-fixed"
		style={{
			backgroundImage: image && `url(${image})`,
		}}
	>
		{socialMedia && (
			<div className={`${$.social_media} mb-m`}>
				{socialMedia.map((item, index) => (
					<a href={item.link} key={index}>
						<i className={item.icon}></i>
					</a>
				))}
			</div>
		)}
		<h2 className="mb-m">{heading}</h2>
		{action && action.text && (
			<Button text={action.text} link={action.link} />
		)}
	</div>
);

export default Inquiry;
