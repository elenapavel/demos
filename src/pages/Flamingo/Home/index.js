import React from 'react';

import $ from './style.scss';

import Button from '~c/Flamingo/Button';
import Column from '~c/Flamingo/Column';

const FlamingoHome = ({ header = {}, sections = [] }) => (
	<b className={$.home}>
		<b
			className={$.header}
			style={{ backgroundImage: `url(${header.image})` }}
		>
			<b className="container mb-l">
				<b className="width-50">
					<h5 className="mb-m">{header.description}</h5>
					<h1 className="mb-m">{header.heading}</h1>
					<Button
						link={header.action.link}
						text={header.action.text}
					/>
				</b>
			</b>
			<b className="container">
				<b className="columns-3">
					{header.columns.map((column, index) => (
						<b className="column" key={index}>
							<Column
								{...column}
								classes="bg-grey p-m"
								hasSeparator
								hover="border"
							/>
						</b>
					))}
				</b>
			</b>
		</b>
		{sections.map((section, index) => (
			<b
				className={`${index % 2 ? 'bg-grey' : 'bg-blue'} section`}
				key={index}
			>
				<b className="container mb-l">
					<b className={section.action ? 'flex-between' : ''}>
						<b className="">
							<h2 className="mb-default">
								<i className="separator"></i>
								{section.heading}
							</h2>
							<h5>{section.description}</h5>
						</b>
						{section.action && (
							<b>
								<Button
									text={section.action.text}
									link={section.action.link}
								/>
							</b>
						)}
					</b>
				</b>
				<b className={section.isContainer ? 'container' : ''}>
					{section.hasDefaultColumns ? (
						<b className="columns-3">
							{section.columns.map((column, key) => (
								<b className="column">
									<Column
										{...column}
										classes="bg-grey p-m"
										hover="background"
										key={key}
									/>
								</b>
							))}
						</b>
					) : section.columnsType === 'works' ? (
						<b className={$.work}>
							{section.columns.map((column, key) => (
								<b className={$.work}>
									<Column {...column} type="work" />
								</b>
							))}
						</b>
					) : null}
				</b>
			</b>
		))}
	</b>
);

export default FlamingoHome;
