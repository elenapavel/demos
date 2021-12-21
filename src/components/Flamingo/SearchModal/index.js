import React, { createRef } from 'react';

import $ from './style.scss';

const Search = ({ onClose = () => {}, onSearch = () => {} }) => {
	const inputRef = createRef();

	return (
		<b className={$.search}>
			<b className={$.close}>
				<i
					className="far fa-times-circle"
					onClick={() => onClose()}
				></i>
			</b>
			<b className={$.search_input}>
				<input type="text" ref={inputRef} />
				<i
					className={`fas fa-search ${$.search_icon}`}
					onClick={() => onSearch(inputRef.current.value)}
				></i>
			</b>
		</b>
	);
};

export default Search;
