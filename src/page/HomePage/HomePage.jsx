import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardList } from '../../components/CardList/CardList';
import { fetchCards } from '../../app/features/cardsSlice.js';

export const HomePage = () => {
	const dispatch = useDispatch();
	const games = useSelector((state) => state.cards.dataGames);

	useEffect(() => {
		dispatch(fetchCards());
	}, [dispatch]);

	return (
		<main>
			{games.loading && <div>Loading...</div>}
			{!games.loading && games.error ? <div>Error: {games.error}</div> : null}
			{!games.loading && games.length ? <CardList data={games} /> : null}
		</main>
	);
};
