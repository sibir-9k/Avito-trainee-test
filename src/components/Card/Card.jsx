/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCurrentGame } from '../../app/features/showCardSlice';
import DateConverter from '../../helper/DateConverter';
import './Card.scss';


export const Card = ({ data }) => {
  const dispatch = useDispatch();

  const setCardId = (id) => {
    dispatch(fetchCurrentGame(id));
  };

  return (
    <div className="card">
      <Link to={'game'} onClick={() => setCardId(data.id)}>
        <div className="card-image">
          <img src={data.thumbnail} alt="" />
        </div>
        <div className="card-info">
          <h3 className="title">{data.title}</h3>
          <p className="release">
            <DateConverter date={data.release_date} />
          </p>
          <p className="publisher">{data.publisher}</p>
          <p className="genre">{data.genre}</p>
          <span className="description">{data.short_description}</span>
        </div>
      </Link>
    </div>
  );
};
