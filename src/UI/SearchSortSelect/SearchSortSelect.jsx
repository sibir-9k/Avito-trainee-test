/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Select } from 'antd';

import './SearchSortSelect.scss';

export const SearchSortSelect = ({ handleChange }) => {
  return (
    <div className="sorted">
      <span>Отсортировать: </span>
      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Выбрать сортировку"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={[
          {
            value: 'release-date',
            label: 'По дате релиза',
          },
          {
            value: 'popularity',
            label: 'По популярности',
          },
          {
            value: 'alphabetical',
            label: 'В алфавитном порядке',
          },
          {
            value: 'relevance',
            label: 'По актуальности',
          },
        ]}
        onChange={handleChange}
      />
    </div>
  );
};
