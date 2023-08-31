import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	updateListGames: [],
	loading: false,
	error: null,
};

export const fetchNewFilterCardList = createAsyncThunk(
	'filterCard/fetchNewFilterCardList',
	async function (data) {
		const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${
			data.platformValue === 'pc' ? 'pc' : 'browser'
		}&category=${data.genreValue}`;
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
	}
);

const filterCardsSlice = createSlice({
	name: 'filterCard',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchNewFilterCardList.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchNewFilterCardList.fulfilled, (state, action) => {
			state.loading = false;
			state.error = '';
			state.updateListGames = action.payload;
		});
		builder.addCase(fetchNewFilterCardList.rejected, (state, action) => {
			state.loading = false;
			state.updateListGames = [];
			state.error = action.error.message;
		});
	},
});

export default filterCardsSlice.reducer;
