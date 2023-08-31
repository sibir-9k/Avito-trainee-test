import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../features/cardsSlice.js';
import showCardReduser from '../features/showCardSlice.js';
import sortCardsReduser from '../features/sortCardsSlice.js';
import filterCardsReduser from '../features/filterCardsSlice.js';

export default configureStore({
	reducer: {
		cards: cardsReducer,
		showCard: showCardReduser,
		sortCard: sortCardsReduser,
		filterCard: filterCardsReduser,
	},
});
