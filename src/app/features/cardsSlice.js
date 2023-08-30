import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	dataGames: [],
	selectedCardId: null,
};

export const fetchCards = createAsyncThunk('cards/fetchCards', async function () {
	const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '23a601aef9msh19c583168a97391p1af5e8jsn448e7410921a',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		},
	};

	try {
		const response = await fetch(url, options);
		return await response.json();
	} catch (error) {
		console.error(error);
	}
});

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		selectedCard: (state, action) => {
			state.selectedCardId = action.payload;
			// console.log(state.selectedCardId);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCards.pending, (state) => {
			console.log(999);
			state.loading = true;
		});
		builder.addCase(fetchCards.fulfilled, (state, action) => {
			state.loading = false;
			state.error = '';
			state.dataGames = action.payload;
		});
		builder.addCase(fetchCards.rejected, (state, action) => {
			state.loading = false;
			state.dataGames = [];
			state.error = action.error.message;
		});
	},
});

export const { selectedCard } = cardsSlice.actions;
export default cardsSlice.reducer;
