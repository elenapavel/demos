import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import { base } from '~/constants/flamingo';

import Button from '~c/Flamingo/Button';
import Search from '~c/Flamingo/SearchModal';

import $ from './style.scss';

const Navigation = ({ logo = null, menu = [], hideSearch = false }) => {
	const [isSearchOn, onChangeSearchVisibility] = useState(false);
	const [searchTerm, onChangeSearchTerm] = useState('');

	const saveSearchTerm = term => {
		console.log(term);
		onChangeSearchTerm(term);
		onChangeSearchVisibility(false);
	};

	return (
		<b className={$.navigation}>
			{logo && (
				<b className={$.logo}>
					<Link to={logo.route}>
						<img src={logo.image} alt="logo" />
					</Link>
				</b>
			)}
			<b className="flex">
				{menu.length && (
					<b className={$.menu}>
						{menu.map((item, index) => {
							let resolved = useResolvedPath(item.route);
							let match = useMatch({
								path: resolved.pathname,
								end: true,
							});

							return item.isButton ? (
								<Button
									key={index}
									link={item.route}
									text={item.name}
								/>
							) : (
								<Link
									key={index}
									to={item.route}
									className={
										match ? $.menu_item_active : $.menu_item
									}
								>
									{item.name}
								</Link>
							);
						})}
					</b>
				)}
				{!hideSearch && (
					<b className={$.search}>
						<i
							onClick={() => onChangeSearchVisibility(true)}
							className={$.search_icon}
						>
							<i className="fas fa-search"></i>
						</i>

						{isSearchOn && (
							<Search
								onClose={() => onChangeSearchVisibility(false)}
								onSearch={val => saveSearchTerm(val)}
							/>
						)}
					</b>
				)}
			</b>
		</b>
	);
};

export default Navigation;
