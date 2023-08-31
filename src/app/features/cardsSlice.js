import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	dataGames: [],
	selectedCardId: null,
};

const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

export const fetchCards = createAsyncThunk('cards/fetchCards', async function (dataUrl) {
	let urlParams = '';

	switch (dataUrl.urlType) {
		case 'sort':
			urlParams = `?sort-by=${dataUrl.sort}`;
			break;
		case 'filter':
			urlParams = `?platform=${dataUrl.filter.platformValue === 'pc' ? 'pc' : 'browser'}&category=${
				dataUrl.filter.genreValue
			}`;
			break;
		case 'filter-sort':
			urlParams = `?platform=${dataUrl.filter.platformValue === 'pc' ? 'pc' : 'browser'}&category=${
				dataUrl.filter.genreValue
			}&sort-by=${dataUrl.sort}`;
			break;
		default:
			break;
	}

	const url = BASE_URL + urlParams;
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
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCards.pending, (state) => {
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
