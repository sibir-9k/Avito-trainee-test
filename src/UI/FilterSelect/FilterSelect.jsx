/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Select } from 'antd';

import './FilterSelect.scss';

const genres = [
	'mmorpg',
	'shooter',
	'strategy',
	'moba',
	'racing',
	'sports',
	'social',
	'sandbox',
	'open-world',
	'survival',
	'pvp',
	'pve',
	'pixel',
	'voxel',
	'zombie',
	'turn-based',
	'first-person',
	'third-Person',
	'top-down',
	'tank',
	'space',
	'sailing',
	'side-scroller',
	'superhero',
	'permadeath',
	'card',
	'battle-royale',
	'mmo',
	'mmofps',
	'mmotps',
	'3d',
	'2d',
	'anime',
	'fantasy',
	'sci-fi',
	'fighting',
	'action-rpg',
	'action',
	'military',
	'martial-arts',
	'flight',
	'low-spec',
	'tower-defense',
	'horror',
	'mmorts',
];

export const FilterSelect = ({ handleChange, platform, genre }) => {
	const genreObj = genres.map((genre) => {
		return {
			value: `${genre}`,
			label: genre,
		};
	});

	return (
		<div className="sorted">
			<span>Отфильтровать : </span>
			<Select
				showSearch
				style={{
					width: 200,
				}}
				placeholder="Платформа"
				optionFilterProp="children"
				filterOption={(input, option) => (option?.label ?? '').includes(input)}
				filterSort={(optionA, optionB) =>
					(optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
				}
				options={[
					{
						value: 'browser',
						label: 'Браузерная',
					},
					{
						value: 'pс',
						label: 'ПК',
					},
				]}
				onChange={(value) => platform(value)}
			/>
			<span> и </span>
			<Select
				showSearch
				style={{
					width: 200,
				}}
				placeholder="Жанр"
				optionFilterProp="children"
				filterOption={(input, option) => (option?.label ?? '').includes(input)}
				filterSort={(optionA, optionB) =>
					(optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
				}
				options={genreObj}
				onChange={(value) => genre(value)}
			/>
			<button className="filter-btn" onClick={handleChange}>
				Фильтровать
			</button>
		</div>
	);
};
