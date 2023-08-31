import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardList } from '../../components/CardList/CardList';
import { fetchCards } from '../../app/features/cardsSlice.js';
import { SearchSortSelect } from '../../UI/SearchSortSelect/SearchSortSelect';
import { FilterSelect } from '../../UI/FilterSelect/FilterSelect';
import './HomePage.scss';

export const HomePage = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.cards.dataGames);
  const [value, setValue] = useState('');
  const [platformValue, setPlatformValue] = useState('');
  const [genreValue, setGenreValue] = useState('');
  let isFirstRender = useRef(true);

  const getData = (urlType) => {
    const dataURL = {
      urlType,
      sort: value,
      filter: {
        platformValue,
        genreValue,
      },
    };
    dispatch(fetchCards(dataURL));
  };

  useEffect(() => {
    if (isFirstRender.current) {
      getData();
      isFirstRender.current = false;
      return;
    }
    if (platformValue && genreValue && value) {
      getData('filter-sort');
      return;
    }
    getData('sort');
  }, [value]);


  const handlePress = () => {
    if (value) {
      getData('filter-sort');
      return;
    }
    getData('filter');
  };

  return (
    <main>
      <SearchSortSelect handleChange={setValue} />
      <FilterSelect handleChange={handlePress} platform={setPlatformValue} genre={setGenreValue} />
      <div className="card-list">
        {games.loading && <div>Loading...</div>}
        {!games.loading && games.error ? <div>Error: {games.error}</div> : null}
        {!games.loading && games.length ? (
          <CardList data={games} />
        ) : (
          <h1>Sorry, not found this games ....</h1>
        )}
      </div>
    </main>
  );
};
