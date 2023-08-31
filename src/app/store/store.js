import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../features/cardsSlice.js';
import showCardReduser from '../features/showCardSlice.js';


export default configureStore({
	reducer: {
		cards: cardsReducer,
		showCard: showCardReduser,
	},
});
