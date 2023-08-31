/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchNewSortCardList } from '../../app/features/sortCardsSlice';
import './SearchSortSelect.scss'

export const SearchSortSelect = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  useEffect(() => {
    dispatch(fetchNewSortCardList(value))
  }, [dispatch, value])

  const handleSelectChange = (selectedValue) => {
    setValue(selectedValue)
  }

  return (
    <div className='sorted'>
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
        onChange={handleSelectChange}
      />
    </div>
  )
}
