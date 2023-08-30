/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function formatDateToRussian(date) {
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const russianDate = new Date(date).toLocaleDateString('ru-RU', options);
	return russianDate;
}

function DateConverter({ date }) {
	const russianDate = formatDateToRussian(date);

	return <span> {russianDate}</span>;
}

export default DateConverter;
