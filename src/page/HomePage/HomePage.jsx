import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardList } from '../../components/CardList/CardList';
import { fetchCards } from '../../app/features/cardsSlice.js';
import { SearchSortSelect } from '../../UI/SearchSortSelect/SearchSortSelect';
import { FilterSelect } from '../../UI/FilterSelect/FilterSelect'
import { fetchNewFilterCardList } from '../../app/features/filterCardsSlice';
import { fetchNewSortCardList } from '../../app/features/sortCardsSlice';
import './HomePage.scss'

export const HomePage = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.cards.dataGames);
  const sortDataGames = useSelector(state => state.sortCard.updateListGames)
  const filterDataGames = useSelector(state => state.filterCard.updateListGames)

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);


  const getData = () => {
    if (sortDataGames?.length > 0) {
      return sortDataGames;
    } else if (filterDataGames?.length > 0) {
      return filterDataGames;
    } else {
      return games;
    }
  };

  useEffect(() => {
    if (!sortDataGames && !filterDataGames) {
      dispatch(fetchNewSortCardList());
      dispatch(fetchNewFilterCardList());
    }
  }, [dispatch, sortDataGames, filterDataGames]);

  return (
    <main>
      <SearchSortSelect></SearchSortSelect>
      <FilterSelect></FilterSelect>
      <div className='card-list'>
        {games.loading && <div>Loading...</div>}
        {!games.loading && games.error ? (
          <div>Error: {games.error}</div>
        ) : null}
        {!games.loading && games.length ? (
          <CardList data={getData()} />
        ) : null}
      </div>
    </main>
  );
};

