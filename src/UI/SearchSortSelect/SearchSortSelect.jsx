import React from 'react'
import { Select } from 'antd';
import './SearchSortSelect.scss'

export const SearchSortSelect = () => {
  return (
    <div className='sorted'>
      <span>Отсортировать: </span>
      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Search to Select"
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
        ]}
      />
    </div>
  )
}
