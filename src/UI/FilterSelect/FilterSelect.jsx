/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchNewFilterCardList } from '../../app/features/filterCardsSlice';
import './FilterSelect.scss'

export const FilterSelect = () => {
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
  const genreObj = genres.map((genre) => {
    return {
      value: `${genre}`,
      label: genre,
    };
  });

  const dispatch = useDispatch();
  const [platformValue, setPlatformValue] = useState('');
  const [genreValue, setGenreValue] = useState('');

  const handleFilterButtonClick = () => {
    console.log(platformValue)
    dispatch(fetchNewFilterCardList({ platformValue, genreValue }));
  };

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
        onChange={(value) => setPlatformValue(value)}
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
        onChange={(value) => setGenreValue(value)}
      />
      <button className='filter-btn' onClick={handleFilterButtonClick}>Фильтровать</button>
    </div>
  );
};
