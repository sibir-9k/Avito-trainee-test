/* eslint-disable react/prop-types */
import { Card } from '../Card/Card';

export const CardList = (props) => {
  const { data } = props;

  return (
    <>
      {data.map((gameInfo) => {
        return <Card data={gameInfo} key={gameInfo.id} />;
      })}
    </>
  );
};
