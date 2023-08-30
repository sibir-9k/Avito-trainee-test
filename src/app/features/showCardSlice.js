import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	game: {},
	loading: false,
	error: null,
};

export const fetchCurrentGame = createAsyncThunk('showCard/fetchCurrentGame', async function (id) {
	const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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

const showCardSlice = createSlice({
	name: 'showCard',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchCurrentGame.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchCurrentGame.fulfilled, (state, action) => {
			state.loading = false;
			state.error = '';
			state.game = action.payload;
		});
		builder.addCase(fetchCurrentGame.rejected, (state, action) => {
			state.loading = false;
			state.dataGames = [];
			state.error = action.error.message;
		});
	},
});

export default showCardSlice.reducer;
